var app = angular.module('ShopApp', ['ui.router','ui.bootstrap','ngAnimate',]);

app.config(function($stateProvider, $httpProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    .state('home', {
        url: '/home',
        views: {
                nav: {
                  templateUrl: 'templates/navbar.html',
                  controller: 'NavCtrl as Ctrl'
        },
                content: {
                    templateUrl: 'templates/home.html'
        }
      }
        

    })

    .state('shop', {
        url: '/shop',
         views: {
                nav: {
                  templateUrl: 'templates/navbar.html',
                  controller: 'NavCtrl as Ctrl'
                },
                content: {
                    templateUrl: 'templates/shop.html',
                     controller: 'ShopCtrl as Ctrl'
                 }
            },
        resolve: {
            products: function(productService) {
                var products = productService.getProducts();
                console.log(products);
                return products;
                console.log("resolve");
            }

        }
    })

    .state('product', {
        url: '/product',
        views: {
                nav: {
                  templateUrl: 'templates/navbar.html',
                  controller: 'NavCtrl as Ctrl'
                },
                content: {
                    templateUrl: 'templates/product.html',
                    controller: 'ProductCtrl as Ctrl'
        }
      }
        
    })

    .state('login', {
        url: '/login',
        views: {
                content: {
                   templateUrl: 'templates/login.html',
                    controller: 'AuthCtrl as Ctrl'
                    }
                }
    })
    .state('admin', {
        url: '/admin',
        views: {
            nav: {
                  templateUrl: 'templates/navbarAdmin.html'
                  
                },
                content: {
                   templateUrl: 'templates/admin.html',
                    controller: 'AdminCtrl as Ctrl'
                    }
                },
        resolve: {

                products: function(productService) {
                    var products = productService.getProducts();
                    console.log(products);
                    if (localStorage.getItem('authToken') == null) {
                        console.log(localStorage.getItem('authToken'));
                        console.log("yoyo");
                        $state.go('login');
                    }else{
                    return products;
                    }
                }

        }
    })
    .state('admin-order', {
        url: '/admin-order',
         views: {
            nav: {
                  templateUrl: 'templates/navbarAdmin.html'
                  
                },
                content: {
                   templateUrl: 'templates/admin-order.html',
                    controller: 'OrderCtrl as Ctrl'
                    }
                },
        resolve: {
            orders: function(productService) {
                return productService.getOrders();
                }
        }
    })
    .state('add_product', {
        url: '/add_product',
        views: {
            nav: {
                  templateUrl: 'templates/navbarAdmin.html'
                  
                },
                content: {
                   templateUrl: 'templates/add_product.html',
                    controller: 'ProductCtrl as Ctrl'
                    }
                }
    })
    .state('check', {
            url: '/checkout',
            views: {
                content: {
                  templateUrl: 'templates/checkout.html',
                    controller: 'CheckCtrl as Ctrl'
                    }
                }    
    })
    .state('cart', {
            url: '/cart',

            templateUrl: 'templates/cart.html',
            controller: 'CartCtrl as Ctrl'
            views: {
                content: {
                  templateUrl: 'templates/cart.html',
                 controller: 'CartCtrl as Ctrl'
                    }
                } 
    })


   
      .state('nav', {
            url: '/navbar',
            templateUrl: 'templates/navbar.html',
            controller: 'NavCtrl as Ctrl'
            
    })
    .state('edit_product', {
        url: '/edit_product',
        views: {
            nav: {
                  templateUrl: 'templates/navbarAdmin.html'
                  
                },
                content: {
                  templateUrl: 'templates/edit_product.html',
                    controller: 'EditCtrl as Ctrl'
                    }
                } 
    });
    //  $httpProvider.interceptors.push(function() {
    //     return {
    //         'request': function(config) {
    //             config.headers = config.headers || {};
    //             if (localStorage.authToken) {
    //                 config.headers.Authorization = localStorage.authToken;
    //             }
    //             return config;
    //         }
    //     };
    
     

});

