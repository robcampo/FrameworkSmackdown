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

            // Star has been clicked, toggle color, change count
            scope.starClicked = function () {
                // Inverse of a boolean
                scope.favorited = !scope.favorited;

                // Increase or decrease the favorite count
                scope.favoriteCount = scope.favorited ? scope.favoriteCount + 1 : scope.favoriteCount - 1;
            };
        }
    };
});