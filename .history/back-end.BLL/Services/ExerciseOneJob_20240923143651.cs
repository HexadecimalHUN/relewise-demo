using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using back_end.DAL.Services;
using back_end.Shared.Interfaces;
using back_end.Shared.Models;
using Relewise.Client.DataTypes;
using System.Text.RegularExpressions;
using System.Globalization;

namespace back_end.BLL.Services{
    public class ExerciseOneJob : IJob {
        
        private readonly ExerciseOneService  _exerciseOneService;

        public ExerciseOneJob(ExerciseOneService exerciseOneService){
            _exerciseOneService = exerciseOneService;
        }

        public async Task<string> Execute(
            JobArguments arguments,
            Func<string, Task> info,
            Func<string, Task> warn,
            CancellationToken token
        ){
            //Fetching ProductData from the Data Access Layer
            var productDataList = await _exerciseOneService.GetProductDataAsync();

            //Initializing a list to hold the mapped products
            List<Product> products = new List<Product>();

            //Assuming we get language information from somewhere else
            var english = new Language("en");

            // Regular expression to remove all non-numeric characters except for the decimal point
            var priceRegex = new Regex(@"[^\d.]");

            //Map each ProductData instance to Relewise.Client.Data.Types.Product
            foreach(var productData in productDataList){
                
                //Check for cancellation
                if (token.IsCancellationRequested){
                    await warn("Operation was cancelled");
                    return "Operation was cancelled";
                }
                //Create the multilingual Display name
                var displayName = new Multilingual(new Multilingual.Value(english, productData.ProductName));
                
                // Strip non-numeric characters from the prices and parse them to decimal
                var listPriceValue = Convert.ToDecimal(priceRegex.Replace(productData.ListPrice ?? "0", ""), CultureInfo.InvariantCulture);
                var salesPriceValue = Convert.ToDecimal(priceRegex.Replace(productData.SalesPrice ?? "0", ""), CultureInfo.InvariantCulture);

                // Create Money instances using the correct Currency and decimal Amount
                var listPrice = new Money(new Currency("USD"), listPriceValue);
                var salesPrice = new Money(new Currency("USD"), salesPriceValue);

                //Checking if ID instance is null
                if (string.IsNullOrEmpty(productData.ProductId))
                {
                    await warn("Product ID is null or empty, skipping product.");
                    continue; // Skip this product and continue with the next one
                }
                //Creating the product instance (constructor or factory method if available)
                var product = new Product(productData.ProductId){
                    DisplayName = displayName,
                    ListPrice = listPrice,
                    SalesPrice = salesPrice

                };
                products.Add(product);
            }
            await info($"{products.Count} products got mapped.");

            return $"{products.Count} products got mapped";      
        }

    }
}