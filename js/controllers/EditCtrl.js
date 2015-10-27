app.controller('EditCtrl',EditCtrl);

function EditCtrl(productService,$state){
	this.productService = productService;
	this.$state=$state;
	
};


EditCtrl.prototype.editProduct = function(name,description,price,img,category,quantity,status) {
	
	var request_body = {
		name:name,
		description:description,
		price:price,
		category:category,
		image: img,
		quantity:quantity,
		status:status
	}

	this.productService.EditProduct(request_body);
	alert("product edittted!");
	
	for (i=0;i<this.productService.products.length;i++){
		
		if(this.productService.products[i].productId==this.productService.productID){
			console.log(this.productService.products[i].productId);
			
			this.productService.products[i].name = name;
			this.productService.products[i].description = description;
			this.productService.products[i].price = price;
			this.productService.products[i].image = img;
			this.productService.products[i].category=category;
			this.productService.products[i].quantity= quantity;
			this.productService.products[i].status = status;
		}
	};

	this.$state.go('admin');
};