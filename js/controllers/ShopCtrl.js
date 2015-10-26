app.controller('ShopCtrl', ShopCtrl);

function ShopCtrl(productService,$location,products){
    var self = this;

    //services
    this.productService = productService;
    this.products = products;
    console.log(this.products);


    this.sortOptions = [
   {label: 'Name', sortField: 'name', reverse: false},
   {label: 'Price Low - High', sortField: 'price', reverse:false},
   {label: 'Price High - Low', sortField: 'price', reverse: true},
    {label: 'Category', sortField: "category", reverse: false}
 ]

  this.selectedOption= this.sortOptions[0];


}