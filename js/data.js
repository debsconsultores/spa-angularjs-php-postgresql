app.factory("Data", ['$http',
    function($http) { // This service connects to our REST API

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