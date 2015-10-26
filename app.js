var app = angular.module('ShopApp', ['ui.router','ui.bootstrap']);

app.config(function($stateProvider, $httpProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html'
    })

    .state('shop', {
        url: '/shop',
        templateUrl: 'templates/shop.html',
        controller: 'ShopCtrl as Ctrl',
        resolve: {
            products: function(productService) {
                return productService.getProducts();
            }

        }
    })

    .state('product', {
        url: '/product',
        templateUrl: 'templates/product.html',
        controller: 'ProductCtrl as Ctrl',
        // resolve: {
            // products: function(productService) {
            //     return productService.getProducts();
            // }
        // }
    })

    .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'AuthCtrl as Ctrl'
    })
    .state('admin', {
        url: '/admin',
        templateUrl: 'templates/admin.html',
        controller: 'AdminCtrl as Ctrl',
        resolve: {

                // path: function($state) {
                //     if (localStorage.getItem('authToken') == null) {
                //         console.log(localStorage.getItem('authToken'));
                //         $state.go('login');
                //     }
                // },
            products: function(productService) {
                return productService.getProducts();
                }
        }
    })
    .state('admin-order', {
        url: '/admin-order',
        templateUrl: 'templates/admin-order.html',
        controller: 'OrderCtrl as Ctrl',
        resolve: {
            orders: function(productService) {
                return productService.getOrders();
                }
        }
    })
    .state('add_product', {
        url: '/add_product',
        templateUrl: 'templates/add_product.html',
        controller: 'ProductCtrl as Ctrl'
      
    })

    .state('check', {
            url: '/checkout',
            templateUrl: 'templates/checkout.html',
            controller: 'CheckCtrl as Ctrl',
              resolve: {
            cart: function(productService) {
                return productService.getCart();
                }
        }
    })
    .state('cart', {
            url: '/cart',
            templateUrl: 'templates/cart.html',
            controller: 'CartCtrl as Ctrl'
    });

  

    // $httpProvider.interceptors.push(function() {
    //     return {
    //         'request': function(config) {
    //             config.headers = config.headers || {};
    //             if (localStorage.authToken) {
    //                 config.headers.Authorization = localStorage.authToken;
    //             }
    //             return config;
    //         }
    //     };
    // });

});

