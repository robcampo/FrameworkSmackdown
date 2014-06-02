/**
 * Routing for the application
 */

angular.module('angular-app').config(function($routeProvider) {
    $routeProvider
        .when("/blogs", {
            controller: "BlogsPageCtrl",
            templateUrl: "js/templates/blogsPage.html"
        })
        .when("/blog/:blogIndex", {
            controller: "BlogPageCtrl",
            templateUrl: "js/templates/blogPage.html"
        })
        .otherwise({
            redirectTo: "/blogs"
        });
});
