'use strict';

angular.module('recipeApp.service', []).service('recipeAPIService', function () {
    
    var recipeSkeleton = {
            name: undefined,
            id: undefined,
            ingredients: [],
            steps: []
        },
        recipesList = [
            {
                name: 'lasagna',
                id: 1,
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
                id: 2,
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
        ],
        nextRecipeId = 3;
    
    this.getRecipesList = function () {
        return recipesList;
    };
    
    this.getRecipeById = function (id) {
        var result = recipesList.filter(function (item) {
            return typeof (id) === "string" ? item.id === parseInt(id, 10) : item.id === id;
        });
        
        if (result && result.length > 0) {
            return result[0];
        } else {
            return undefined;
        }
    };
    
    this.addRecipe = function (recipe) {
        recipe.id = nextRecipeId;
        nextRecipeId += 1;
        recipesList.push(recipe);
        return recipe;
    };
    
    this.removeRecipeById = function (id) {
        
    };
    
    this.createEmptyRecipe = function () {
        return recipeSkeleton;
    };

});