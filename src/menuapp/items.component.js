(function() {
  'use strict';

  angular.module('DataModule')
  .component('itemList', {
    templateUrl: 'src/menuapp/templates/items.template.html',
    bindings: {
      items: '<'
    }
  })
})();
