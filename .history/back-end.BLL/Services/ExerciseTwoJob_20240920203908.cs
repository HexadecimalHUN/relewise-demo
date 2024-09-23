using System;
using System.Globalization;
using System.Text.RegularExpressions;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using back_end.DAL.Services;
using back_end.Shared.Interfaces;
using back_end.Shared.Models;
using Relewise.Client.DataTypes;

namespace back_end.BLL.Services{
    public class ExerciseTwoJob : IJob{
        private readonly ExerciseTwoService _service;

        public ExerciseTwoJob(ExerciseTwoService service){
            _service = service;
        }

        public async Task<string> Execute(JobArguments arguments, Func<string, Task> info, Func<string, Task> warn, CancellationToken token){
            var googleProducts = await _service.GetGoogleShoppingProductsAsync();
            int productCount = 0;

            foreach(var googleProduct in googleProducts){
                var id = googleProduct.ProductId ?? string.Empty;
                var displayName = new Multilingual(new Multilingual.Value(new Language("en"), googleProduct.ProductName));

                var listPrice = !string.IsNullOrEmpty(googleProduct.ListPrice) ? ParseMoney(googleProduct.ListPrice) : null;

                var salesPrice = !string.IsNullOrEmpty(googleProduct.SalesPrice) ? ParseMoney(googleProduct.SalesPrice) : null;

                var product = new Product(id){
                    DisplayName = displayName,
                    ListPrice = listPrice,
                    SalesPrice = salesPrice
                };

                productCount++;

                if (product.DisplayName.Values.Count > 0){
                    await info($"Mapped product: {product.DisplayName.Values[0]} with ID: {product.Id}");
                }
                else{
                    await warn($"Product ID {product.Id} has no display name values.");
                }
            }

            return $"{productCount} products got mapped.";
        }

        private Money ParseMoney(string priceString){
            if (string.IsNullOrEmpty(priceString)) return null;
            
            var match  = Regex.Match(priceString, @"(?<amount>\d+(\.\d+)?)\s*(?<currency>[A-Z]{3})");

            if (match.Success){
                var amount = decimal.Parse(match.Groups["amount"].Value, CultureInfo.InvariantCulture);
                var currency = match.Groups["currency"].Value;
                return new Money(currency, amount);
            }

            return null;

        }
    }
}