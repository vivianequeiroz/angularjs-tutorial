var app6 = angular.module('app6', []);

// $rootscope = allows the sharing of info between 2 scopes
app6.controller('heroCtrl', function($scope, $rootscope) {
    $scope.hero = [
        {realName: "Bruce Wayne", heroName: "Batman"},
        {realName: "Clark Kent", heroName: "Superman"}
    ];

    $scope.getheroData = function() {
        heroSearch($scope.heroName);
    };

    function heroSearch(name) {
        $scope.heroData = "Not found";
        for(var i=0; i<$scope.hero.length; i++) {
            if($scope.hero[i].heroName === name) {
                $scope.heroData = $scope.hero[i].realName +
                " is " + $scope.hero[i].heroName;
            }
        }
    }

    $scope.addHeroData = function(realName, heroName) {
        $rootScope.$broadcast("heroUpdated",
        {
            realName: realName, heroName: heroName
        });
        console.log("Real: " + realName + " Hero: " + heroName);
    };
}); 