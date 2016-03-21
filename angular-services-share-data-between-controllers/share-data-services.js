angular.module('app', [])
    .controller('ctrl1', function ($scope, appData) {
        appData.addData('foo');
    })
    .controller('ctrl2', function ($scope, appData) {
        $scope.getInfo = appData.getData();
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