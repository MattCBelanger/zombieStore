app.controller('ShopCtrl', ShopCtrl);


function ShopCtrl(productService,$state,products,$uibModal){
	var self = this;

	//services
	this.$state=$state;
	this.productService = productService;
	this.products = products;
	console.log(this.products);
	this.$uibModal = $uibModal;


    this.sortOptions = [
   {label: 'Name', sortField: 'name', reverse: false},
   {label: 'Price Low - High', sortField: 'price', reverse:false},
   {label: 'Price High - Low', sortField: 'price', reverse: true},
    {label: 'Category', sortField: "category", reverse: false}
 ]

  this.selectedOption= this.sortOptions[0];


};

ShopCtrl.prototype.changeID = function(product) {
	console.log(product);
	this.productService.setProductID(product);
	this.$state.go('product');
};

ShopCtrl.prototype.addToCart= function(product){
	var shopItem = product;

	shopItem.customerQuantity =1;
	
	console.log(shopItem.customerQuantity);
	this.productService.addToCart(shopItem);
	alert("product added!");
	
};

ShopCtrl.prototype.open = function(){
	  this.$uibModal.open({
      animation: true,
      templateUrl: 'templates/cart.html',
      controller: 'CartCtrl as Ctrl',
      size: "lg"
      
    });

}

