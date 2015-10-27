app.controller('CartCtrl',CartCtrl);

function CartCtrl(productService,$modalInstance,$state){
	
	this.$modalInstance = $modalInstance;
	this.productService = productService;
	this.$state = $state;
	this.cart = this.productService.cart;
	
}


CartCtrl.prototype.ok = function () {
 			this.$modalInstance.close();
 		
  };


CartCtrl.prototype.checkOut = function () {
 			this.$modalInstance.close();
 			this.$state.go('check');
 		
  };

 