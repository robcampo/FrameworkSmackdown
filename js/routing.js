/**
 * Routing for the application
 */

angular.module('angular-app').config(function($routeProvider) {
    $routeProvider
        // Main blogs page
        .when("/blogs", {
            controller: "BlogsPageCtrl",
            templateUrl: "js/templates/blogsPage.html"
        })

        // Individual blog page
        .when("/blog/:blogIndex", {
            controller: "BlogPageCtrl",
            templateUrl: "js/templates/blogPage.html",
            // Resolve these dependencies before showing the page
            resolve: {
                comments: function (commentsResource) {
                    return commentsResource.get().$promise;
                }
            }
        })
        // TODO: Add more pages here

        // Default to this page if all else fails
        .otherwise({
            redirectTo: "/blogs"
        });
});
