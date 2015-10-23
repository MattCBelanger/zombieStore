app.controller('ShopCtrl', ShopCtrl);

function ShopCtrl(productService,$location,products){
	var self = this;

	//services
	this.productService = productService;
	this.products = products;
	this.search= productService.getProducts;
	console.log(this.products);




};
