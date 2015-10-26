app.controller('CartCtrl',CartCtrl);

function CartCtrl(productService){
	
	
	this.productService = productService;
	this.cart = this.productService.cart;
	
}


CartCtrl.prototype.addQuant = function(product) {
	
	
};

CartCtrl.prototype.subQuant = function(number) {
	
};