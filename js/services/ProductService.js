app.service('productService',ProductService);

function ProductService(api){
	//services
	this.api = api;
	this.cart = [];
	this.productID = "";
	this.products = localStorage.getItem('products');
	this.orders = localStorage.getItem('orders');
	this.searchBar = "";
}


ProductService.prototype.retrieveProducts = function(){
	var self = this;
	return this.api.request('/retrieve_products/team1',{},'POST');
}

ProductService.prototype.retrieveOrders = function(){
	var self = this;
	return this.api.request('/retrieve_orders/team1',{},'GET');
}

ProductService.prototype.setProducts = function(products){
	//store the products in local storage so you don't have to make an API
	//request each time you are on this page.
	localStorage.setItem('products',JSON.stringify(products));
	this.products = products;
}


ProductService.prototype.setOrders = function(orders){
	//store the products in local storage so you don't have to make an API
	//request each time you are on this page.
	localStorage.setItem('orders',JSON.stringify(orders));
	this.orders = orders;
}

ProductService.prototype.getProducts = function(){
	var self = this;
	//if there are no products stored in localStorage
	//grab them from the API,store them in localStorage
	//and pass back the products as a promise
	if(this.products == null){
		return this.retrieveProducts().then(function(response){
				self.setProducts(response.data.products);
				return response.data.products;
		   });
	}
	else{
		return JSON.parse(self.products);
	}
}

ProductService.prototype.getOrders = function(){
	var self = this;
	//if there are no products stored in localStorage
	//grab them from the API,store them in localStorage
	//and pass back the products as a promise
	if(this.orders == null){
		return this.retrieveOrders().then(function(response){
				self.setOrders(response.data.orders);
				return response.data.orders;
		   });
	}
	else{
		return JSON.parse(self.orders);
	}
}
ProductService.prototype.addProduct = function(product){
 	//TODO: add the new product to the current product list and
 	//return the updated list
	return this.api.request('/newproduct',product,'POST')
			.then(function(response){
				console.log(response);
				//upddate on html pages???
			});;

}

ProductService.prototype.addOrder = function(order){
 	//TODO: add the new product to the current product list and
 	//return the updated list
	return this.api.request('/record_order',order,'POST')
			.then(function(response){
				console.log(response);
				//upddate on html pages???
			});;

}

ProductService.prototype.addToCart = function(item){
 	
 	this.cart.push(item);
 	console.log(this.cart);

}

ProductService.prototype.getCart = function(){
 	return this.cart;
}

ProductService.prototype.setProductID = function(productID){
	this.productID = productID;

}
