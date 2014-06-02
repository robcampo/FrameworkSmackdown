/**
 * Blog page controller
 */

angular.module('angular-app').controller('BlogPageCtrl',
    function ($scope, $routeParams, blogsService, comments) {

        var blogIndex = $routeParams.blogIndex;

        // Get the blog that was clicked
        $scope.blog = blogsService.getBlog(blogIndex);

        // Use the comments
        $scope.comments = comments.comments;
    }
);