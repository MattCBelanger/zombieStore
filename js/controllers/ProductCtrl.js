app.controller('ProductCtrl',ProductCtrl);

function ProductCtrl(productService){
	this.productService = productService;
	this.product = this.productService.productID;
	
}
// ProductCtrl.prototype.addProduct = function(name,description,price,category,quantity,status){
// 	//create the api request that makes the product on the backend
// 	//as part of your response you need to add it to your current
// 	//product array using the product service
// 	var request_body = {
// 		name:name,
// 		description:description,
// 		price:price,
// 		category:category,
// 		quantity:quantity,
// 		status:status
// 	}

// 	this.productService.addProduct(request_body);

// }


ProductCtrl.prototype.addToCart= function(product){
	this.product.customerQuantity = 50;
	console.log(this.product.customerQuantity);
	this.productService.addToCart(product);
	alert("product added!");
	
}