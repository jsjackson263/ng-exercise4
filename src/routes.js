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

    // Menu Categories
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menuapp/templates/category-main.template.html',
      controller: 'MainMenuAppController as mainlist'
    });

  }
})();
