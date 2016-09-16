'use strict';

angular.module('recipeApp.view', ['ngRoute'])

    .config(['$routeProvider', 'recipeRoutesServiceProvider', function ($routeProvider, routesServiceProvider) {
        
        var routesService = routesServiceProvider.$get();
        
        $routeProvider.when(routesService.getRecipeViewRoute(), {
            templateUrl: 'recipe-view/recipe-view.html',
            controller: 'RecipeViewCtrl'
        });
    }])
    
    .controller('RecipeViewCtrl', ['$scope', '$routeParams', 'recipeAPIService', function ($scope, $routeParams, recipeAPIService) {
        var recipe = recipeAPIService.getRecipeById($routeParams.id);
        $scope.recipe = recipe;
    }]);