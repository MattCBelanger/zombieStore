var app = angular.module('ShopApp',['ui.router']);

app.config(function($stateProvider,$httpProvider,$urlRouterProvider){
	

	$urlRouterProvider.otherwise('/home');

	$stateProvider
	
	.state('home', {
        url: '/home',
        templateUrl: 'templates/home.html'
    })

	.state('login',{
		 url: '/login',
		templateUrl:'templates/login.html',
		controller:'AuthCtrl as Ctrl'
	})
	.state('admin',{
		url: '/admin',
		templateUrl:'templates/admin.html',
		controller:'AdminCtrl as Ctrl',
		resolve:{
			path:function($location){
					if(localStorage.getItem('authToken') == null){
						$location.path('/login');
					}
				},
			products:function(productService){
					return productService.getProducts();
				}
			}
	})
	.state('add_product',{
		url: '/add_product',
		templateUrl:'templates/add_product.html',
		controller:'ProductCtrl as Ctrl'
	});
	

	$httpProvider.interceptors.push(function() {
    return {
      'request': function(config) {
        config.headers = config.headers || {};
        if (localStorage.authToken) {
          config.headers.Authorization = localStorage.authToken;
        }
        return config;
      }
    };
  });
});