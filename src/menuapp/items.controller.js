(function() {
  'use strict';

  angular.module('DataModule')
  .controller('MenuItemsController', MenuItemsController);

  MenuItemsController.$inject = ['items'];
  function MenuItemsController(items) {

    console.log("MenuItemsController - items: ", items);
    var itemlist = this;
    itemlist.items = items.menu_items;
    itemlist.categoryName = items.category.name;

  }
})();
