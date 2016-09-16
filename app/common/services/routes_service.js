(function () {
    'use strict';

    angular.module('recipeApp.routes', [])

        .constant("ROUTES", {
            "RECIPES_LIST": "/recipe-list",
            "RECIPES_CREATION": "/recipe-new",
            "RECIPES_VIEW": "/recipe-view/:id"
        })
    
    /*
        .provider('recipeRoutesProvider', ['ROUTES', function (ROUTES) {
            this.$get = function () {
                return ROUTES;
            };
        }])
    */
        .service('recipeRoutesService', function (ROUTES) {

            this.getRecipeViewRoute = function (recipeId) {
                return recipeId ? ROUTES.RECIPES_VIEW.replace(":id", recipeId) : ROUTES.RECIPES_VIEW;
            };
        
            this.getRecipeListRoute = function () {
                return ROUTES.RECIPES_LIST;
            };
        
            this.getRecipeCreationRoute = function () {
                return ROUTES.RECIPES_CREATION;
            };

        });
}());