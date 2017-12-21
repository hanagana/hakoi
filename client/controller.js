(function () {
    angular.module('k')
        .controller('kController', kController);

    kController.$inject = ['$scope'];
    function kController($scope) {
        $scope.activeTab = 'open';
        var sampleObject = {
            symbol: '',
            quantity: '',
            priceBuy: '',
            priceSold: '',
            currentOrderPrice: '',
            boughtDate: '',
            soldDate: '',
            type: '1',
            isOpen: '1',
            isDelete: '0'
        };
        $scope.closeModal = closeModal;
        $scope.openModal = openModal;
        $scope.openCreate = openCreate;
        $scope.openUpdate = openUpdate;


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

        function deleteKoi() {
            $scope.currentKoi.isDelete = 1;
        }

        function done() {
            $scope.currentKoi.isOpen = 0;
        }
    }
})();