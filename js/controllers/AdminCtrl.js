app.controller('AdminCtrl',AdminCtrl);

function AdminCtrl(productService,$state,products){
	var self = this;

	//services
	this.productService = productService;
	this.products = products;
	console.log(this.products);

}
