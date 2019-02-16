(function() {
  'use strict';

  angular.module('DataModule')
  .controller('MenuItemsController', MenuItemsController);

  MenuItemsController.$inject = ['MenuDataService'];
  function MenuItemsController(MenuDataService) {

    var itemlist = this;
    itemlist.items = [];

    itemlist.getItemsForCategory = function(categoryShortName) {
      MenuDataService.getItemsForCategory(categoryShortName)
      .then(function(result) {
        itemlist.items = result;
          console.log("MenuCategoriesController - itemlist.category: ", itemlist.category);
      }).catch(function(error) {
          console.log("MenuCategoriesController - getItemsForCategory-  error: ", error);
      });

    };

  }
})();
