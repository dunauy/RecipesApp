(function () {
    "use strict";
    
    angular.module("recipeApp.directives", [])

        .controller('IngredientsListCtrl', ['$scope', function ($scope) {
            $scope.ingredients = $scope.recipe.ingredients;
        }])
    
        .controller('StepsListCtrl', ['$scope', function ($scope) {
            $scope.steps = $scope.recipe.steps;
        }])
    
        .directive('steps', [function () {
            return {
                templateUrl: 'common/directives/templates/steps.html',
                controller: 'StepsListCtrl'
            };
        }])
    
        .directive('ingredients', [function () {
            return {
                templateUrl: 'common/directives/templates/ingredients.html',
                controller: 'IngredientsListCtrl'
            };
        }]);
    
    

}());