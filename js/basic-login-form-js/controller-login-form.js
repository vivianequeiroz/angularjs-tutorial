var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'login-form.html'
    })
    .when('/login',{
        templateUrl: 'dashboard.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});

app.controller('loginCtrl', function($scope) {
    $scope.submit = function() {
        var username = $scope.username;
        var password = $scope.password;
        if($scope.username == 'admin' && $scope.password) {
            $location.path('/dashboard');
        } else {
            alert('Wrong information. Please, try again.');
        }
    };
})