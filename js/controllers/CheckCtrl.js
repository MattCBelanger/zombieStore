app.controller('CheckCtrl',CheckCtrl);

function CheckCtrl(productService,cart){
	
	this.cart = productService.cart;
	
}

CheckCtrl.prototype.addOrder = function(total,tax,finalTotal){
	//create the api request that makes the product on the backend
	//as part of your response you need to add it to your current
	//product array using the product service
	var request_body = {
		cart:this.cart,
		total:total,
		tax:tax,
		final_total:finalTotal
		
	}
	console.log(request_body);

	this.productService.addOrder(request_body);

}