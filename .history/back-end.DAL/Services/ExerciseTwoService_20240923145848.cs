using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Xml.Linq;
using System.Globalization;
using back_end.Shared.Models;

namespace back_end.DAL.Services{
    public class ExerciseTwoService{
        private readonly HttpClient _httpClient;
        public ExerciseTwoService(HttpClient httpClient){
            _httpClient = httpClient;
        }

        public async Task<List<GoogleProductData>>GetGoogleShoppingProductsAsync(){
            var products = new List<GoogleProductData>();
            //Hardcoding fetched URL, because we know, it is not going to change.
            string response = await _httpClient.GetStringAsync("https://cdn.relewise.com/academy/productdata/googleshoppingfeed");
            var xml = XDocument.Parse(response);

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
        }
    }
}