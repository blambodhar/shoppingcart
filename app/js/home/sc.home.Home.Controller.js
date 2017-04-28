(function (module) {
    "use strict";

    module.controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'productsCategory'];

    function HomeController($scope, productsCategory) {
        /*-- model data interface --*/
        $scope.categories = [];


        _init();



        /*-- method definitions --*/

        /**!
         *
         * @private
         */
        function _init() {
            productsCategory.getProductCategories()
                .then(function(categories){
                    console.log('categories' + categories);
                    $scope.categories = categories;
                });


            var category = {
                "id": "5005",
                "category_name":"AAAAA",
                "short_description": "AAAAAAAAAAA>>>"
            };

            productsCategory.addProductCategory(category).then(function(response){
                console.log('Successfully created.')
            });
        }

        


    }

})(angular.module('sc.home'));