app.controller('OrderConfirmCtrl',OrderConfirmCtrl);


function OrderConfirmCtrl(productService,$modalInstance,$state){
	
	this.$modalInstance = $modalInstance;
}
CartCtrl.prototype.ok = function () {
 			this.$modalInstance.close();
 			this.$state.go('shop');
 		
  };
