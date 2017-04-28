(function () {
    "use strict";

    angular.module('sc.core',
        [
            /*angular dependencies*/
            'ui.router',


            /*application feature module dependencies*/
            'sc.home',
            'sc.cart',
            'sc.products'


            /*3rd party module dependencies*/
        ]
    );

})();