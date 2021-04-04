angular.module('namer', [])
.directive('namer', function() {
    return {
        scope: {},
        restrict: 'A',
        link: function(scope, element, a) {
            scope.fullName = a.first + ' ' + a.last;
            scope.first = a.first;
            scope.last = a.last;
        },
        template: "{{fullName}}"
    }
})