(function (module) {
    "use strict";

    module.factory('httpData', httpData);

    function httpData($http) {
        /**!
         * 
         * @type {{request: *}}
         */
        var service = {
            makeRequest: makeRequest
        };

        return service;
        
        function makeRequest(payload) {
            return $http(payload);
        }

    }

})(angular.module('sc.core'));