var app = angular.module('mainApp', []);

app.controller('people', function($scope, $http) {
    // get request initiated with angular http service
    $http.get('src/additional-concepts/database-people.json')
    .response(function(response){
        $scope.persons = response.data.records; 
    });
});

// app.controller("people", function($scope, $http) {
//     $http.get("file:///Users/vivianequeiroz/Documents/Programacao/angularjs-tutorial/src/additional-concepts/database-people.json")
//     .then(function(response) {
//         $scope.persons = response.data.records;
//     })
//     .catch(function(response) {
//         console.log(response);
//     });
// });