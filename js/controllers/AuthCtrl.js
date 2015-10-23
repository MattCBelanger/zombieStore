app.controller('AuthCtrl',AuthCtrl);

function AuthCtrl(api,$state){
	this.api = api;
	this.$state = $state;
}
AuthCtrl.prototype.authenticate = function(username,password){
	var self = this;
	var request_body = {
		username:username,
		password:password
	};

	this.api.request('/login',request_body,'POST')
	.then(function(response) {
      console.log(response);
      if(response.data.authToken != 'Invalid Credentials'){
      	//reset local storage data
      	localStorage.removeItem('products');
      	localStorage.setItem('authToken',response.data.authToken);
      	self.$state.go('admin');
<<<<<<< HEAD
=======

>>>>>>> dev
      
      }
    });;
}