;(function (){

  'use strict';

  angular.module('AutoTrak')
  .service('UserContentService', ['HEROKU', '$http', '$state', '$cookies',
    function (HEROKU, $http, $state, $cookies) {


      var userInventory = HEROKU.URL + '/inventory_items/business_user';
      var addInventoryItems = HEROKU.URL + '/repair_item';
      var getInventoryItems = HEROKU.URL + '/repair_items';

      this.getUserInventory = function (){
        return $http.get(userInventory, HEROKU.CONFIG);
      };

      this.getRepairItems = function (){
        return $http.get(getInventoryItems, HEROKU.CONFIG);
      };

      this.checkoutItem = function (item) {
        $http.post(addInventoryItems, item, HEROKU.CONFIG)
        .success( function (data){
          console.log('success');
          $state.go('UserDash.checkout');
        });
      };
    }

  ]);

}());

