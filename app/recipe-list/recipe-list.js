'use strict';

angular.module('recipeApp.list', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/list', {
            templateUrl: 'recipe-list/recipe-list.html',
            controller: 'RecipeListCtrl'
        });
    }])

    .controller('RecipeListCtrl', ['$scope', function ($scope) {

        // TODO: pedir esto al servicio.
        $scope.recipesList = [
            {
                name: 'lasagna',
                ingredients: [
                    {name: 'lasagna noodles', quantity: 12},
                    {name: 'lean ground beef', quantity: '1 pound'},
                    {name: 'tomato pasta sauce', quantity: '1/2 jar'}
                ],
                steps: [
                    {order: 1, description: 'Boil the lasagna noodles'},
                    {order: 2, description: 'Cook the meat'},
                    {order: 3, description: 'Mix cooked meat with the sauce'},
                    {order: 4, description: 'Place 4 noodles, top with a layer of meat mixture, another layer of 4 noodles ...'}
                ]
            },
            {
                name: 'fried eggs',
                ingredients: [
                    {name: 'eggs', quantity: 2},
                    {name: 'salt', quantity: 'to taste'}
                ],
                steps: [
                    {order: 1, description: 'Heat a pan'},
                    {order: 2, description: 'Fry the eggs'},
                    {order: 3, description: 'Add salt to taste'}
                ]
            }
        ];
    }]);