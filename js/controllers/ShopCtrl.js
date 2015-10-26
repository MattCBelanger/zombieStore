app.controller('ShopCtrl', ShopCtrl);

function ShopCtrl(productService,$state,products){
	var self = this;

	//services
	this.$state=$state;
	this.productService = productService;
	this.products = products;
	this.search= productService.getProducts;
	console.log(this.products);




};

ShopCtrl.prototype.changeID = function(product) {
	console.log(product);
	this.productService.setProductID(product);
	this.$state.go('product');
};
