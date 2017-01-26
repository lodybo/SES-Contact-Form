angular.module("sesApp", ["ngResource"])
    .controller("sesCtrl", function ($scope, $resource) {
        $scope.toggles = {
            success: true,
            error: true
        };
    });