angular.module('app', []).directive('appHeight', function ($window) {
    return function (scope, element, attrs) {
        element.css('height', ($window.innerHeight) + 'px');
    }
})