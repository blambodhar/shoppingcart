(function (module) {
    "use strict";

    module.config(configure);

    configure.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configure($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home',
                {
                    url:'/home',
                    templateUrl: '/app/partial/home.html',
                    controller:'HomeController'
                })
            .state('cart',
                {
                    url:'/cart',
                    templateUrl:'/app/partial/cart.html',
                    controller:'CartController'
                })
            .state('products',
                {
                    url:'/products',
                    params: {
                        category: null
                    },
                    templateUrl:'/app/partial/products.html',
                    controller:'ProductsController'
                });

    }
})(angular.module('sc'));