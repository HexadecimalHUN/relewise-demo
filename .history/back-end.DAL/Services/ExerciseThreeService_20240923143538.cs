using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using back_end.Shared.Models;

namespace back_end.DAL.Services{
    public class ExerciseThreeService{
        private readonly HttpClient _httpClient;

        public ExerciseThreeService(HttpClient httpClient){
            _httpClient = httpClient;
        }

        public async Task<List<RawProductData>> GetRawProductDatasAsync(){
            var products = new List<RawProductData>();

            //Hardcoding response URL, as we know it will not change later on
            var response = await _httpClient.GetStringAsync("https://cdn.relewise.com/academy/productdata/raw");

            //Splitting lines and iterating trough the rows (skipping two header rows)

            var rows = response.Split('\n', StringSplitOptions.RemoveEmptyEntries);
            for (int i= 2; i < rows.Length; i++){
                var columns = rows[i].Split('|', StringSplitOptions.RemoveEmptyEntries);

                if ( columns.Length < 9) continue; //Skipping incomplete rows

                var product = new RawProductData{
                    ProductId = columns[0].Trim(),
                    ProductName = columns[1].Trim(),
                    BrandName = columns[2].Trim(),
                    SalesPrice = columns[3].Trim(),
                    ListPrice = columns[4].Trim(),
                    ShortDescription = columns[5].Trim(),
                    InStock = columns[6].Trim().Equals("Yes", StringComparison.OrdinalIgnoreCase),
                    Color = columns[7].Trim(),
                    Category = columns[8].Trim(),
                };

                products.Add(product);
            }

            return products;

        }
    }
}