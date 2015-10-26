app.controller('CartCtrl',CartCtrl);

function CartCtrl(productService,$modalInstance){
	
	this.$modalInstance = $modalInstance;
	this.productService = productService;
	this.cart = this.productService.cart;
	
}


CartCtrl.prototype.ok = function () {
 			this.$modalInstance.close();
 		
  };

 