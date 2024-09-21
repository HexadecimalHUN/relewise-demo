namespace back_end.Shared.Models{
    public class RawProductData{
        public string? ProductId {get; set;} // Maps to Product ID
        public string? ProductName {get; set;} // Maps to Product Name
        public string? BrandName {get; set;} //Maps to Brand Name
        public string? SalesPrice {get;set;}  //Maps to Sales Price
        public string? ListPrice {get; set;} //Maps to List Price
        public string? ShortDescription {get; set;} // Maps to Short Description
        public bool? InStock {get; set;} // Maps to In Stock
        public string? Color {get; set;} // Maps to Color
        public string? Category {get; set;} // Maps to Category
    }
}