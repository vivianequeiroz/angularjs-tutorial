var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        // through an AJAX request angular will recover the page's content and display it to user
        // template and templateUrl does not load together, if both exists, angular only displays the template
        templateUrl: 'page.html'
    })
    .when('/helloUser', {
        template: 'hello.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});