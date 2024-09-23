using System;
using System.Collections.Generic;
using System.Net;
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

            try{
                //Hardcoding response URL, as we know it will not change later on
                var response = await _httpClient.GetAsync("https://cdn.relewise.com/academy/productdata/raw");

                switch(response.StatusCode){
                    case HttpStatusCode.OK:
                        string responseString = await response.Content.ReadAsStringAsync();
                        var rows = responseString.Split('\n', StringSplitOptions.RemoveEmptyEntries);

                        // Iterate through rows, skipping the first two header rows
                        for (int i = 2; i < rows.Length; i++)
                        {
                            var columns = rows[i].Split('|', StringSplitOptions.RemoveEmptyEntries);

                            if (columns.Length < 9) continue; // Skip incomplete rows

                            var product = new RawProductData
                            {
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
                    case HttpStatusCode.NotFound:
                        throw new Exception("Error: The requested resource was not found.");

                    case HttpStatusCode.BadRequest:
                        throw new Exception("Error: Bad request. Please check the request and try again.");

                    case HttpStatusCode.InternalServerError:
                        throw new Exception("Error: Internal server error occurred at the server.");

                    case HttpStatusCode.ServiceUnavailable:
                        throw new Exception("Error: Service is currently unavailable.");

                    default:
                        throw new Exception($"Error: Unexpected status code {response.StatusCode}.");

                }
            }
            catch(HttpRequestException ex){
                throw new Exception("Error: Unable to reach the API. Please check your network connection.", ex);
            }


           

        }
    }
}