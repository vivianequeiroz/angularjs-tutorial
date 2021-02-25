var app1 = angular.module('app1', []); // creating the model  - associate the angular js app with the html, provide acess to angular features and organization

app1.controller('ctrl1', function($scope) {
    $scope.first = 1;
    $scope.second = 1;

    $scope.updateValue = function() {
        $scope.calculation = $scope.first + ' + ' + $scope.second + ' = ' + (+$scope.first + +$scope.second);
    }
});