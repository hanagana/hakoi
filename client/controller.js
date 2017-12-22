(function () {
    angular.module('k')
        .controller('kController', kController);

    kController.$inject = ['$scope', 'kService'];
    function kController($scope, kService) {
        $scope.activeTab = 'open';
        var sampleObject = {
            symbol: '',
            quantity: 0,
            priceBuy: 0,
            priceSold: 0,
            currentOrderPrice: 0,
            type: 1,
            isOpen: 1,
            isDelete: 0
        };
        $scope.closeModal = closeModal;
        $scope.openModal = openModal;
        $scope.openCreate = openCreate;
        $scope.openUpdate = openUpdate;
        $scope.save = save;
        $scope.kois = [];
        $scope.getAllKoi = getAllKoi;


        function save() {
            if($scope.mode == "create") {
                doCreate();
            }
        }

        function getAllKoi(query) {
            kService.getAllKoi(query).then(function(data) {
                $scope.kois = data;
            })
        }

        function openCreate() {
            openModal();
            $scope.mode = "create";
            $scope.currentKoi = angular.copy(sampleObject);
        }

        function openUpdate() {
            $scope.mode = "update";
        }

        function closeModal() {
            $("#modal").modal("hide");
        }

        function openModal() {
            $("#modal").modal("show");
        }

        function doUpdate() {

        }

        function doCreate() {
            kService
            .createKoi(angular.copy($scope.currentKoi))
            .then(function(data) {
                console.log(data);
                closeModal();
            }, function (err) {
                console.log(err);
            });
        }

        function deleteKoi() {
            $scope.currentKoi.isDelete = 1;
        }

        function done() {
            $scope.currentKoi.isOpen = 0;
        }
    }
})();