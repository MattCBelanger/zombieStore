app.controller('OrderCtrl',OrderCtrl);

function OrderCtrl(productService,orders){
	this.orders = orders;
	console.log(this.orders);
	// this.productService = productService;
	// this.cart=[];
	
}


