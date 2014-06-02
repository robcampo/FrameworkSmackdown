/**
 * Service for holding blogs
 */

angular.module('angular-app').factory('blogsService',
    function () {
        return {
            blogs: [{
                name: 'My First Blog',
                content: 'In my first blog I\'ll talk about blah blah blah'
            }, {
                name: 'My Second Blog',
                content: 'My second blog dives further into how ...'
            }],

            /**
             * Helper functions
             */
            getBlog: function (blogIndex) {
                return this.blogs[blogIndex];
            }
        }
    }
);
