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

            //Hardcoding fetched URL, as we know it is not going to change
            var url = "https://cdn.relewise.com/academy/productdata/customjsonfeed";

            var response = await _httpClient.GetStringAsync(url);
            var productDataList = JsonConvert.DeserializeObject<List<ProductData>>(response);

            //Checking for null reference
            if (productDataList == null){
                throw new Exception("Failed to deserialize product data.");
            }

            return productDataList;
        }

    }
}