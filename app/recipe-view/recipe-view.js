'use strict';

angular.module('recipeApp.view', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/recipe-view/:id', {
            templateUrl: 'recipe-view/recipe-view.html',
            controller: 'RecipeViewCtrl'
        });
    }])
    
    .controller('RecipeViewCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
        $scope.recipe = $scope.recipesList.filter(function (item) {
            return item.id === $routeParams.id;
        });
    }]);