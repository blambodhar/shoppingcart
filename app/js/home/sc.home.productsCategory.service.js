(function (module) {
    "use strict";

    module.factory('productsCategory', productsCategory);
    
    productsCategory.$inject = ['$q', 'httpData'];

    function productsCategory($q, httpData) {

        /**!
         * 
         * @type {{getProductCategories: *}}
         */
        var service = {
            getProductCategories: getProductCategories,
            addProductCategory: addProductCategory,
            getProducts: getProducts,
            getProductsByCategory: getProductsByCategory
        };

        return service;


        ///////function definitions ///////

        /**!
         * getProductCategories: Retrieve all the products categories
         *                       from the Category entity
         * @returns {Promise}
         */
        function getProductCategories() {
            
            var deferred = $q.defer(), 
                payload = {
                    method: 'GET',
                    url: 'http://localhost:7000/categories'
                };
            

            httpData.makeRequest(payload)
                .then(function (response) {
                    /**!------------------------------
                     * response = {
                     *      config: {},
                     *      data: {},
                     *      headers: function(){......}
                     *      status: 200,
                     *      statusText: 'OK'
                     * }
                     *----------------------------**/
                    console.log(response.data);
                    deferred.resolve(response.data);
                }, function (error) {
                    /**!------------------------------
                     * error = {
                     *      code: {},
                     *      message: {},
                     *      name: ''
                     *      stack: ''
                     * }
                     *----------------------------**/
                    console.log(data);
                    deferred.reject(error.message);
                });
            
            return deferred.promise;
        }

        function getProducts() {
            
            var deferred = $q.defer(), 
                payload = {
                    method: 'GET',
                    url: 'http://localhost:7000/products' //http://localhost:7000/products?category_id=CATG1
                };
            

            httpData.makeRequest(payload)
                .then(function (response) {
                    console.log(response.data);
                    deferred.resolve(response.data);
                }, function (error) {
                    console.log(data);
                    deferred.reject(error.message);
                });
            
            return deferred.promise;
        }
        function getProductsByCategory(category) {
            var URL = category? 'http://localhost:7000/products?category_id='+category : 'http://localhost:7000/products';
            var deferred = $q.defer(), 
                payload = {
                    method: 'GET',
                    url: URL
                };
            

            httpData.makeRequest(payload)
                .then(function (response) {
                    console.log(response.data);
                    deferred.resolve(response.data);
                }, function (error) {
                    console.log(data);
                    deferred.reject(error.message);
                });
            
            return deferred.promise;
        }

        /**!
         * addProductCategory: Adding a category to Category entity
         *
         * @param category
         */
        function addProductCategory(category) {
            var deferred = $q.defer(),
                payload = {
                    method: 'POST',
                    url: 'http://localhost:7000/category',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    data: category
                };


            httpData.makeRequest(payload)
                .then(function(response){
                    console.log('successfully created a category.');
                    deferred.resolve(response);
                },function(error){
                    console.log('ERROR occurred while creating a category.')
                    deferred.reject(error);
                });

            return deferred.promise;
        }
        
        
        

    }

})(angular.module('sc.home'));