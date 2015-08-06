angular.module('app', [])
    .controller('ctrl', function ($scope, appData) {
        $scope.getInfo = appData.getData();
        $scope.addInfo = 'foo';
        appData.addData($scope.addInfo);
    })
    .service('appData', function () {
        data = [];
        var addData = function (i) {
            var args = data.push(i);
        };
        var getData = function () {
            return data;
        };

        return {
            getData: getData,
            addData: addData
    }
});