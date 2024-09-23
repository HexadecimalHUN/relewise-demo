using System.Net.Http;
using System.Threading.Tasks;
using System.Collections.Generic;
using Newtonsoft.Json;
using back_end.Shared.Models;



namespace back_end.DAL.Services{
    public class ExerciseOneService{
        private readonly HttpClient _httpClient;
        
        public ExerciseOneService(HttpClient httpClient){
            _httpClient = httpClient;
        }

        public async Task<List<ProductData>> GetProductDataAsync(){

            //Fetching url
            var url = "https://cdn.relewise.com/academy/productdata/customjsonfeed";

            //Waiting for response
            var response = await _httpClient.GetStringAsync(url);


            //De-Serializing Object
            var productDataList = JsonConvert.DeserializeObject<List<ProductData>>(response);

            //Checking for null reference
            if (productDataList == null){
                throw new Exception("Failed to deserialize product data.");
            }

            return productDataList;
        }

    }
}