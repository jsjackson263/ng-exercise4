(function() {
  'user strict';

  angular.module('DataModule')
  .controller('MenuCategoriesController', MenuCategoriesController);

  MenuCategoriesController.$inject = ['MenuDataService'];
  function MenuCategoriesController(MenuDataService) {

    var mainlist = this;
    mainlist.categories = [];

    mainlist.$onInit = function() {
      MenuDataService.getAllCategories()
      .then(function(result) {
        mainlist.categories = result;
        console.log("MenuCategoriesController - mainlist.categories: ", mainlist.categories);
      }).catch(function(error) {
          console.log("MenuCategoriesController - getAllCategories - error: ", error);
      });
    };

  }
})();
