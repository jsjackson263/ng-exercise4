(function() {
  'use strict';

  angular.module('DataModule')
  .component('categoryList', {
    templateUrl: 'src/menuapp/templates/category-list.template.html',
    bindings: {
      categories: '<'
    }
  });
  
})();
