/**
 * Blog page controller
 */

angular.module('angular-app').controller('BlogPageCtrl',
    function ($scope, $routeParams, blogsService) {

        var blogIndex = $routeParams.blogIndex;
        console.log('blogIndex: ', blogIndex);

        $scope.blog = blogsService.getBlog(blogIndex);
    }
);