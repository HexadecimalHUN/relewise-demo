using System;
using System.Collections.Generic;
using System.Globalization;
using System.Text.RegularExpressions;
using System.Threading;
using System.Threading.Tasks;
using back_end.DAL.Services;
using back_end.Shared.Interfaces;
using back_end.Shared.Models;
using Relewise.Client.DataTypes;

namespace back_end.BLL.Services{
    public class ExerciseThreeJob : IJob {
        private readonly ExerciseThreeService _exerciseThreeService;
        
        public ExerciseThreeJob(ExerciseThreeService exerciseThreeService){
            _exerciseThreeService = exerciseThreeService;
        }

        public async Task<string> Execute(
            JobArguments arguments,
            Func<string, Task> info,
            Func<string, Task> warn,
            CancellationToken token
        ){
            //Parse raw product data
            List<RawProductData> rawProducts = await _exerciseThreeService.GetRawProductDatasAsync();

            //Map products to Relewise product objects
            List<Product>relewiseProducts = new List<Product>();
            foreach(var rawProduct in rawProducts){
                //Parse SalesPrice and ListPrice into Money Objects
                var listPrice = !string.IsNullOrEmpty(rawProduct.ListPrice) ? ParseMoney(rawProduct.ListPrice) : null;
                var salesPrice = !string.IsNullOrEmpty(rawProduct.SalesPrice) ? ParseMoney(rawProduct.SalesPrice) : null;
                
                var displayName = new Multilingual(new Multilingual.Value(new Language("en"), rawProduct.ProductName));
                var id = rawProduct.ProductId ?? string.Empty; // Ensure you have an ID

                var relewiseProduct = new Product(id){
                    DisplayName = displayName,
                    ListPrice = listPrice ?? new Money ("USD", 0),
                    SalesPrice = salesPrice ?? new Money ("USD", 0),
                };

                relewiseProducts.Add(relewiseProduct);
            }
             // Log information about the number of products mapped
            await info($"{relewiseProducts.Count} products got mapped.");

            // Return a summary message
            return $"{relewiseProducts.Count} products got mapped.";

        }

        private Money ParseMoney(string priceString)
        {
            if (string.IsNullOrEmpty(priceString)) return new Money ("USD", 0);

            var match = Regex.Match(priceString, @"(?<amount>\d+(\.\d+)?)\s*(?<currency>[A-Z]{3})");

            if (match.Success)
            {
                var amount = decimal.Parse(match.Groups["amount"].Value, CultureInfo.InvariantCulture);
                var currency = match.Groups["currency"].Value;
                return new Money(currency, amount);
            }

            return new Money ("USD", 0);
        }
    }
}