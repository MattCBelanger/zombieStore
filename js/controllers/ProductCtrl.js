app.controller('ProductCtrl',ProductCtrl);

function ProductCtrl(productService,$state){
	this.productService = productService;
	this.product = this.productService.productView;
	this.$state=$state;
	
}
ProductCtrl.prototype.addProduct = function(name,description,price,category,quantity,status){
	
	var request_body = {
		name:name,
		description:description,
		price:price,
		category:category,
		quantity:quantity,
		status:status
	}

	this.productService.addProduct(request_body);
	alert("product added!");
	

}


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

