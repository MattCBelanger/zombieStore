app.controller('OrderCtrl',OrderCtrl);


function OrderCtrl(productService,orders){
	this.orders = orders;
	console.log(this.orders);
	// this.productService = productService;
	// this.cart=[];
	
}
// OrderCtrl.prototype.addOrder = function(total,tax,finalTotal){
// 	//create the api request that makes the product on the backend
// 	//as part of your response you need to add it to your current
// 	//product array using the product service
// 	var request_body = {
// 		cart:this.cart,
// 		total:total,
// 		tax:tax,
// 		final_total:finalTotal
		
// 	}
// 	console.log(request_body);

// 	this.productService.addOrder(request_body);

// }

// OrderCtrl.prototype.addToCart = function(name,price,quantity){
// 	//create the api request that makes the product on the backend
// 	//as part of your response you need to add it to your current
// 	//product array using the product service
// 	var request_body = {
// 		name:name,
// 		price:price,
// 		quantity:quantity
	
// 	}

// 	this.cart.push(request_body);
// 	console.log(this.cart);
// }

