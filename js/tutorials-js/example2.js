var app2 = angular.module('app2', []);

app2.controller('ctrl1', function($scope) {

    $scope.randomNum1 = Math.floor((Math.random() * 10 + 1));
    $scope.randomNum2 = Math.floor((Math.random() * 10 + 1));

});


app2.controller('sweetCtrl', function($scope) {

    var sweetFood = ["Cake", "Apple pie", "Candy", "Lollipop"];

    $scope.sweet = sweetFood[Math.floor((Math.random() * 4))];

});

app2.controller('savoryCtrl', function($scope) {

    var savoryFood = ["Vegetables pie", "Cheese bread", "Yakissoba", "Snack"];

    $scope.savory = savoryFood[Math.floor((Math.random() * 4))];

});