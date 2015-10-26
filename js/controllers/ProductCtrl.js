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
	this.product.customerQuantity = 1;
	console.log(this.product.customerQuantity);
	this.productService.addToCart(product);
	alert("product added!");
	

}

//Delete products 
// ProductCtrl.prototype.clearProduct = function(productId){
// 	console.log("This got printed!");
// 	var index = this.products.indexOf(product);
// 	if (index != - 1) {
// 		this.productService.splice(index, 1);
// 	}
// }

