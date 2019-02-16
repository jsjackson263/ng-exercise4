(function() {
  'user strict';

  angular.module('DataModule')
  .controller('MenuCategoriesController', MenuCategoriesController);

  MenuCategoriesController.$inject = ['categories'];
  function MenuCategoriesController(categories) {

    var mainlist = this;
    mainlist.categories = categories;
    
  }
})();
