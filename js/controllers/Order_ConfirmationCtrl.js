app.controller('OrderConfirmCtrl',OrderConfirmCtrl);


function OrderConfirmCtrl(productService,$modalInstance,$state){
	
	this.$modalInstance = $modalInstance;
}
OrderConfirmCtrl.prototype.ok = function () {
 			this.$modalInstance.close();
 			this.$state.go('shop');
 		
  };
