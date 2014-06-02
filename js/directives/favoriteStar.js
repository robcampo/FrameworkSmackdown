/**
 * Favorite directive
 */

angular.module('angular-app').directive('favoriteStar', function() {
    return {
        restrict: 'E',
        templateUrl: 'js/templates/favoriteStar.html',
        link: function (scope) {

            scope.favorited = false;
            scope.favoriteCount = 5;

            scope.starClicked = function () {
                scope.favorited = !scope.favorited;

                scope.favoriteCount = scope.favorited ? scope.favoriteCount + 1 : scope.favoriteCount - 1;
            };
        }
    };
});