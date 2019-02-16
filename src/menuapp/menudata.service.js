(function() {
  'use strict';

  angular.module('DataModule')
  .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http', 'ApiBasePath']
  function MenuDataService($http, ApiBasePath) {
    var service = this;

    service.getAllCategories = function() {

      var response = $http({
        method: 'GET',
        url: ApiBasePath + '/categories.json'
      }).then(function(response) {
        // console.log("MenuDataService - getAllCategories - response.data: ", response.data);
        return response.data;
      }).catch(function(error) {
        console.log("service.getAllCategories - Error in service call: ", error);
      });

      return response;
    };

    service.getItemsForCategory = function(categoryShortName) {
      var response = $http({
        method: 'GET',
        url: ApiBasePath + '/menu_items.json?category=' + categoryShortName
      }).then(function(response) {
        // console.log("MenuDataService - getItemsForCategory (" + categoryShortName + ") - response.data: ", response.data);
        return response.data;

      }).catch(function(error) {
        console.log("service.getItemsForCategory (" + categoryShortName + ") - Error in service call: ", error);
      });

      return response

    };


  }

})();
