'use strict';

angular.module('recipeApp.list', ['ngRoute', 'recipeApp.routes'])

    .config(['$routeProvider', 'recipeRoutesServiceProvider', function ($routeProvider, routesServiceProvider) {
        var recipeRoutesService = routesServiceProvider.$get();
        $routeProvider.when(recipeRoutesService.getRecipeListRoute(), {
            templateUrl: 'recipe-list/recipe-list.html',
            controller: 'RecipeListCtrl'
        });
    }])

    .controller('RecipeListCtrl', ['$scope', 'recipeAPIService', 'recipeRoutesService', function ($scope, recipeAPIService, recipeRoutesService) {

        $scope.recipesList = recipeAPIService.getRecipesList();
        $scope.routesService = recipeRoutesService;
    }]);