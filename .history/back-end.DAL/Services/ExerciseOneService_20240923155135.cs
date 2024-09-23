using System.Net.Http;
using System.Threading.Tasks;
using System.Collections.Generic;
using Newtonsoft.Json;
using back_end.Shared.Models;
using System.Net;



namespace back_end.DAL.Services{
    public class ExerciseOneService{
        private readonly HttpClient _httpClient;
        
        public ExerciseOneService(HttpClient httpClient){
            _httpClient = httpClient;
        }

        public async Task<List<ProductData>> GetProductDataAsync(){

            //Hardcoding fetched URL, as we know it is not going to change
            var url = "https://cdn.relewise.com/academy/productdata/customjsonfeed";

            try{
                var response = await _httpClient.GetAsync(url);
                switch (response.StatusCode){
                    case HttpStatusCode.OK:
                        string responseString = await response.Content.ReadAsStringAsync();
                        var productDataList = JsonConvert.DeserializeObject<List<ProductData>>(responseString);

                        if (productDataList == null){
                            throw new Exception("Failed to deserialize product data");
                        }

                        return productDataList;
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