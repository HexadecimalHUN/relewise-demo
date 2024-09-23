const express = require('express');
const axios = require('axios');
const {ProductUpdateBuilder } = require('@relewise/integrations');
const cors = require('cors');

const app = express();
const port = 4000;

//Enable Cors
app.use(cors())

app.use(express.json()); // Middleware to parse JSON request bodies

// JobArguments class definition
class JobArguments {
    constructor(datasetId, apiKey, jobConfiguration) {
        this.datasetId = datasetId;
        this.apiKey = apiKey;
        this.jobConfiguration = jobConfiguration;
    }
}

// IJob interface
class IJob {
    async execute(jobArguments, info, warn, token) {
        // Placeholder for subclass implementation
    }
}

// Implementing the equivalent of ExerciseOneJob in JavaScript
class ExerciseFourJob extends IJob {
    constructor(productService) {
        super();
        this.productService = productService;
    }

    async execute(jobArguments, info, warn, token) {
        try {
            // Fetch product data (simulating the data access layer)
            const productDataList = await this.productService.getProductData();

            //Setting up default language
            const english = 'en'; 
            const products = [];

            // Map each product data into Relewise product format
            for (const productData of productDataList) {
                if (token && token.isCancelled) {
                    await warn('Operation was cancelled.');
                    return 'Operation was cancelled';
                }

                // Ensure the product has a valid ID
                if (!productData.productId) {
                    await warn('Product ID is null or empty, skipping product.');
                    continue;
                }

                // Parse the prices
                const listPriceValue = parseFloat((productData.listPrice || '0').replace(/[^\d.]/g, ''));
                const salesPriceValue = parseFloat((productData.salesPrice || '0').replace(/[^\d.]/g, ''));

                // Create a product update using ProductUpdateBuilder
                const product = new ProductUpdateBuilder({
                    id: productData.productId, // Mapping productId to Id
                    productUpdateKind: 'ReplaceProvidedProperties',
                    variantUpdateKind: 'ReplaceProvidedProperties',
                    replaceExistingVariants: true,
                })
                    .displayName([{ language: english, value: productData.productName }]) // Mapping productName to Multilingual DisplayName
                    .listPrice([{ currency: 'USD', amount: listPriceValue }]) // Mapping listPrice to MultiCurrency ListPrice
                    .salesPrice([{ currency: 'USD', amount: salesPriceValue }]) // Mapping salesPrice to MultiCurrency SalesPrice

                products.push(product.build());
            }

            await info(`${products.length} products got mapped.`);
            return `${products.length} products got mapped.`;
        } catch (error) {
            await warn(`Error during product mapping: ${error.message}`);
            throw error;
        }
    }
}

// Simulated ProductService that fetches product data
class ProductService {
    async getProductData() {
        // Fetch product data from the JSON feed
        const response = await axios.get('https://cdn.relewise.com/academy/productdata/customjsonfeed');
        return response.data;
    }
}

// Set up the ProductService and ExerciseFourJob
const productService = new ProductService();
const exerciseFourJob = new ExerciseFourJob(productService);

// POST endpoint to trigger the job
app.post('/api/exercisefour/execute', async (req, res) => {
    const { datasetId, apiKey, jobConfiguration } = req.body;
    const jobArguments = new JobArguments(datasetId, apiKey, jobConfiguration);

    try {
        const result = await exerciseFourJob.execute(jobArguments, console.log, console.warn, { isCancelled: false });
        res.json({ message: result });
    } catch (error) {
        res.status(500).json({ error: 'Error processing products.' });
    }
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});