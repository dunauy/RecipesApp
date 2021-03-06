'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'recipeApp.routes',
    'recipeApp.list',
    'recipeApp.new',
    'recipeApp.view',
    'recipeApp.service',
    'recipeApp.directives',
    //'myApp.view1',
    //'myApp.view2',
    'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/recipe-list'});
}]);
