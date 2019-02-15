(function() {
  'user strict';

  angular.module('DataModule')
  .controller('MainMenuAppController', MainMenuAppController);

  MainMenuAppController.$inject = ['MenuDataService'];
  function MainMenuAppController(MenuDataService) {

    var mainlist = this;
    mainlist.categories = [];

    mainlist.$onInit = function() {
      MenuDataService.getAllCategories()
      .then(function(result) {
        mainlist.categories = result;
        console.log("MainMenuAppController - mainlist.categories: ", mainlist.categories);
      }).catch(function(error) {
          console.log("MainMenuAppController - error: ", error);
      });
    };


  }
})();
