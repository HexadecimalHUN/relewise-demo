using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Xml.Linq;
using System.Globalization;
using back_end.Shared.Models;
using System.Net;

namespace back_end.DAL.Services{
    public class ExerciseTwoService{
        private readonly HttpClient _httpClient;
        public ExerciseTwoService(HttpClient httpClient){
            _httpClient = httpClient;
        }

        public async Task<List<GoogleProductData>>GetGoogleShoppingProductsAsync(){
            var products = new List<GoogleProductData>();

            try{
                //Hardcoding fetched URL, because we know, it is not going to change.
                var response = await _httpClient.GetAsync("https://cdn.relewise.com/academy/productdata/googleshoppingfeed");

                switch(response.StatusCode){
                    case HttpStatusCode.OK:
                        string responseString = await response.Content.ReadAsStringAsync();
                        var xml = XDocument.Parse(responseString);
                        foreach(var item in xml.Descendants("item")){
                            var product = new GoogleProductData
                            {
                                ProductId = item.Element(XName.Get("id", "http://base.google.com/ns/1.0"))?.Value, 
                                ProductName = item.Element("title")?.Value,
                                Description = item.Element("description")?.Value,
                                ImageUrl = item.Element(XName.Get("image_link", "http://base.google.com/ns/1.0"))?.Value,
                                Availability = item.Element(XName.Get("availability", "http://base.google.com/ns/1.0"))?.Value,
                                ListPrice = item.Element(XName.Get("price", "http://base.google.com/ns/1.0"))?.Value,
                                SalesPrice = item.Element(XName.Get("sale_price", "http://base.google.com/ns/1.0"))?.Value,
                                Brand = item.Element(XName.Get("brand", "http://base.google.com/ns/1.0"))?.Value,
                                Category = item.Element(XName.Get("product_type", "http://base.google.com/ns/1.0"))?.Value,
                                Color = item.Element(XName.Get("color", "http://base.google.com/ns/1.0"))?.Value,
                                Condition = item.Element(XName.Get("condition", "http://base.google.com/ns/1.0"))?.Value
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