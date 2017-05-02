(function (module) {
    "use strict";

    module.controller('ProductsController', ProductsController);

    ProductsController.$inject = ['$scope', '$state', '$stateParams', 'productsCategory'];

    function ProductsController($scope, $state, $stateParams, productsCategory) {
        /*-- model data interface --*/
        $scope.products = [];
        $scope.selectedCategory = $state.params.category;
        console.log('category = ' +$state.params.category);
        console.log('category = ' +$stateParams.category);


        _init();


        function _init() {
            productsCategory.getProductsByCategory($scope.selectedCategory)
                .then(function(products){
                    console.log('products' + products);
                    $scope.products = products;
                });
       }
    }

})(angular.module('sc.products'));