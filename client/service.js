(function () {
    angular.module('k')
        .factory('kService', kService);

    kService.$inject = ['$q', '$http'];

    function kService($q, $http) {
        // var apiUrl = 'https://hakoi.herokuapp.com/api/koi';
        var apiUrl = 'http://localhost:5000/api/koi';
        return {
            createKoi: createKoi,
            getAllKoi: getAllKoi,
            getOneKoi: getOneKoi,
            updateKoi: updateKoi,
            deleteKoi: deleteKoi
        };

        function updateKoi(koi) {
            var deferred = $q.defer();

            $http.put(apiUrl + "/"+ koi.id, koi).then(function (res) {
                deferred.resolve(res.data);
            }, function (err) {                
                deferred.reject(err.data);
            });
            return deferred.promise;
        }

        function getOneKoi(id) {
            var deferred = $q.defer();

            $http.get(apiUrl + "/" + id).then(function (res) {
                deferred.resolve(res.data);
            }, function (err) {
                deferred.reject(err.data);
            });
            return deferred.promise;
        }

        function createKoi(koi) {
            var deferred = $q.defer();
            $http.post(apiUrl, koi).then(function (res) {
                deferred.resolve(res.data);
            }, function (err) {
                deferred.reject(err.data);
            });
            return deferred.promise;
        }

        function getAllKoi(query) {
            var deferred = $q.defer();

            $http.get(apiUrl + '?open=' + (query == 'open' ? 1 : 0)).then(function (res) {
                deferred.resolve(res.data);
            }, function (err) {
                deferred.reject(err.data);
            });
            return deferred.promise;
        }

        function deleteKoi(id) {
            var deferred = $q.defer();

            $http.delete(apiUrl + "/" + id).then(function (res) {
                deferred.resolve(res.data);
            }, function (err) {
                deferred.reject(err.data);
            });
            return deferred.promise;
        }
    };
})();