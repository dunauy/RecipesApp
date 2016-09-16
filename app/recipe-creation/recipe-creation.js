(function () {
    'use strict';
    
    var resetForm, validateForm;
    
    resetForm = function ($scope) {
        if ($scope.recipe) {
            $scope.recipe.steps = [];
            $scope.recipe.ingredients = [];
            $scope.recipe.name = "";
        }
        $scope.formIngredient = {};
        $scope.formStep = {};
    };
    
    validateForm = function (recipe) {
        return recipe.name && recipe.ingredients.length > 0 && recipe.steps.length > 0;
    };

    angular.module('recipeApp.new', ['ngRoute'])

        .config(['$routeProvider', 'recipeRoutesServiceProvider', function ($routeProvider, routesServiceProvider) {
            var routesService = routesServiceProvider.$get();
            
            $routeProvider.when(routesService.getRecipeCreationRoute(), {
                templateUrl: 'recipe-creation/recipe-creation.html',
                controller: 'RecipeCreationCtrl'
            });
        }])

        .controller('RecipeCreationCtrl', ['$scope', 'recipeAPIService', '$location', 'recipeRoutesService', function ($scope, recipeAPIService, $location, routesService) {
            // Reset form
            resetForm($scope);
            $scope.recipe = recipeAPIService.createEmptyRecipe();   // reset form

            $scope.createRecipe = function () {
                if (validateForm($scope.recipe)) {
                    recipeAPIService.addRecipe(angular.copy($scope.recipe));
                    resetForm($scope);
                    $location.path(routesService.getRecipeListRoute());
                } else {
                    window.alert("All fields are mandatory");
                }
            };


            $scope.addIngredient = function () {
                $scope.recipe.ingredients.push({
                    name: $scope.formIngredient.name,
                    quantity: $scope.formIngredient.quantity
                });
                $scope.formIngredient = {};
            };

            $scope.addStep = function () {
                $scope.recipe.steps.push({
                    order: $scope.recipe.steps.length + 1,
                    description: $scope.formStep.description
                });
                $scope.formStep = {};
            };
        }]);
}());