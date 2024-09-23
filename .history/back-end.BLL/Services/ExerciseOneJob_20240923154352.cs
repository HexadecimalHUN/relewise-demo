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
            var productDataList = await _exerciseOneService.GetProductDataAsync();

            List<Product> products = new List<Product>();

            //Initialize default language
            var english = new Language("en");

            // Regular expression to remove all non-numeric characters except for the decimal point
            var priceRegex = new Regex(@"[^\d.]");
            
            foreach(var productData in productDataList){

                if (token.IsCancellationRequested){
                    await warn("Operation was cancelled");
                    return "Operation was cancelled";
                }

                var displayName = new Multilingual(new Multilingual.Value(english, productData.ProductName));
                var listPriceValue = Convert.ToDecimal(priceRegex.Replace(productData.ListPrice ?? "0", ""), CultureInfo.InvariantCulture);
                var salesPriceValue = Convert.ToDecimal(priceRegex.Replace(productData.SalesPrice ?? "0", ""), CultureInfo.InvariantCulture);

                var listPrice = new Money(new Currency("USD"), listPriceValue);
                var salesPrice = new Money(new Currency("USD"), salesPriceValue);


                if (string.IsNullOrEmpty(productData.ProductId))
                {
                    await warn("Product ID is null or empty, skipping product.");
                    continue;
                }

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