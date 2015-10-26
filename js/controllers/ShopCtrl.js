app.controller('ShopCtrl', ShopCtrl);


function ShopCtrl(productService,$state,products){
	var self = this;

	//services
	this.$state=$state;
	this.productService = productService;
	this.products = products;
	this.search= productService.getProducts;
	console.log(this.products);


    this.sortOptions = [
   {label: 'Name', sortField: 'name', reverse: false},
   {label: 'Price Low - High', sortField: 'price', reverse:false},
   {label: 'Price High - Low', sortField: 'price', reverse: true},
    {label: 'Category', sortField: "category", reverse: false}
 ]

  this.selectedOption= this.sortOptions[0];


};

ShopCtrl.prototype.changeID = function(product) {
	console.log(product);
	this.productService.setProductID(product);
	this.$state.go('product');
};

