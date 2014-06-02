/**
 * Blog page controller
 */

angular.module('angular-app').controller('BlogPageCtrl',
    function ($scope, $routeParams, blogsService, comments) {

        var blogIndex = $routeParams.blogIndex;

        $scope.blog = blogsService.getBlog(blogIndex);
        $scope.comments = comments.comments;

        console.log('$scope.comments: ', $scope.comments);
    }
);