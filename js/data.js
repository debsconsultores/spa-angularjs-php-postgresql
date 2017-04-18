app.factory("Data", ['$http',
    function($http) { // Este servicio conecta con nuestro REST API

        var serviceBase = 'services/';

        var obj = {};

        obj.get = function(q, object) {
            return $http.get(serviceBase + q + ".php", {
                params: object
            }).then(function(results) {
                return results.data;
            });
        };

        return obj;
    }
]);