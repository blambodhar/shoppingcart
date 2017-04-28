(function (module) {
    "use strict";

    module.factory('shopService', shopService);

    shopService.$inject = ['$q', '$http'];

    function shopService($q, $http){
        return{
            getShopData: getShopData
        }

        function getShopData(){
            var deferred = $q.defer();

            $http({
                url: 'http://127.0.0.1:9090/home',
                method: 'GET'
            })
                .then(function(response){
                    deferred.resolve(response.data);
                }, function(error){
                    deferred.reject(error);
                });

            return deferred.promise;
        }
    }

})(angular.module('sc'));
