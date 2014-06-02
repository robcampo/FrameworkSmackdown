/**
 * Comments resource
 */

angular.module('angular-app').factory('commentsResource', function ($resource) {
    return $resource('/json/blog-comments.json');
});