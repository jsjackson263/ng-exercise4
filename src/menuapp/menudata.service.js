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
        return response.data;
      }).catch(function(error) {
        console.log("Error in service call: ", error);
      });

      return response;
    };


  }

})();
