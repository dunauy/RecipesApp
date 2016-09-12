'use strict';

angular.module('recipeApp.new', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/recipe-new', {
            templateUrl: 'recipe-creation/recipe-creation.html',
            controler: 'RecipeCreationCtrl'
        });
    }])
    
    .controller('RecipeCreationCtrl', ['$scope', function ($scope) {
        
    }]);