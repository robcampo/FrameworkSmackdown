/**
 * Blogs home page controller
 */

angular.module('angular-app').controller('BlogsPageCtrl',
    function ($scope, $location, blogsService) {

        $scope.blogs = blogsService.blogs;

        $scope.blogPageClicked = function (blogIndex) {
            $location.path("/blog/" + blogIndex);
        }
    }
);