(function() {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // Configure UI $states
    $stateProvider

    // Home Page
    .state('home', {
      url: '/',
      templateUrl: 'src/menuapp/templates/home.template.html'
    })

    // Menu Categories List
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menuapp/templates/category-main.template.html',
      controller: 'MenuCategoriesController as mainlist'
    })

    // Categories Items List
    .state('category-items', {
      url: '/category-items/{categoryShortName}',
      templateUrl: 'src/menuapp/templates/items.template.html',
      controller: 'MenuItemsController as itemlist'
    });

  }
})();
