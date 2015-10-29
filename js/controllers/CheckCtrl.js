app.controller('CheckCtrl',CheckCtrl);

function CheckCtrl(productService,$uibModal){
	
	this.productService = productService;
	this.$uibModal=$uibModal;
	this.cart = this.productService.cart;
	this.final_total=0;
	this.total=0;
	this.tax=0;
	this.customerinfo={};


	this.calculate();
}

CheckCtrl.prototype.addInfo = function(firstname,lastname,address,addressl2,city,province,postalcode,telephone){
		this.customerinfo = {
		firstname:firstname,
		lastname:lastname,
		address:address,
		addressl2:addressl2,
		city:city,
		province:province,
		postalcode:postalcode,
		telephone:telephone
		
	}
	console.log(this.customerinfo);
	//this.customerinfo.splice();
	
}
CheckCtrl.prototype.addOrder = function(){
	//create the api request that makes the product on the backend
	//as part of your response you need to add it to your current
	//product array using the product service

	var request_body = {
		cart:this.cart,
		total:this.total.toString(),
		tax:this.tax.toString(),
		final_total:this.final_total.toString()
		
	}
	console.log(request_body);

	this.productService.addOrder(request_body);

}


CheckCtrl.prototype.calculate = function(){

	for(i=0;i<this.cart.length;i++){
		console.log("hi");
		this.total = this.total + (this.cart[i].customerQuantity *this.cart[i].price);
	
		// this.total = parseFloat(Math.round(this.total * 100) / 100).toFixed(2);
	}


	this.tax = this.total*0.13;
	this.final_total = this.tax + this.total;
	this.final_total = Number(this.final_total);
	console.log(this.final_total);
	




}

CheckCtrl.prototype.open = function(){
	this.cart.unshift(this.customerinfo);
	var request_body = {
		cart:this.cart,
		total:this.total.toString(),
		tax:this.tax.toString(),
		final_total:this.final_total.toString()
		
	}
	console.log(request_body);

	this.productService.addOrder(request_body);


	  this.$uibModal.open({
      animation: true,
      templateUrl: 'templates/order_confirmation.html',
      controller: 'OrderConfirmCtrl as Ctrl',
      size: "lg"
      
    });
}

