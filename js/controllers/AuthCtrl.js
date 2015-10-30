app.controller('AuthCtrl',AuthCtrl);

function AuthCtrl(api,productService,$state,toastr){
	this.api = api;
  this.productService = productService;
  this.$state = $state;
  this.toastr=toastr;

}
AuthCtrl.prototype.authenticate = function(username,password){
	
if(username == null){
  this.toastr.error('No User Name', 'Error!');
  return;
}
  var self = this;
	var request_body = {
		username:username,
		password:password
	};

	this.api.request('/login',request_body,'POST')
	.then(function(response) {
      console.log(response);
        console.log(response.data.authToken);
        self.toastr.error('Invaid Login', 'Error!');
  return;
      if(response.data.authToken != 'Invalid Credentials'){
      	console.log('promise went thru');
      	localStorage.removeItem('products');
      	localStorage.setItem('authToken',response.data.authToken);
      	self.productService.token = response.data.authToken;
      	console.log(self.productService.token);
      	
		    self.$state.go('admin');
      	// self.$state.go('admin', {}, {reload: true});
      }
      else{
        localStorage.setItem('authToken',null);
      }
    });
 
};