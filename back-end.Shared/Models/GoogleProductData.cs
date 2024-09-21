namespace back_end.Shared.Models{
    public class GoogleProductData{
        public string? ProductId {get; set;} // Maps to <g:id>
        public string? ProductName {get; set;} //Maps to <title>
        public string? Description {get; set;} // Maps to <description>
        public string? ImageUrl {get; set;} //Maps to <g:image_link>
        public string? Availability {get; set;} //Maps to <g:availability>
        public string? ListPrice {get; set;} //Maps to <g:price>
        public string? SalesPrice {get; set;} //Maps to <g:sale_price>
        public string? Brand {get; set;} //Maps to <g:brand>
        public string? Category {get; set;} //Maps to <g:product_type>
        public string? Color {get; set;} //Maps to <g:color>
        public string? Condition {get; set;} //Maps to <g:condition>
    }
    
}