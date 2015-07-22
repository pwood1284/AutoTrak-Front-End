;(function (){

  'use strict';

  angular.module('AutoTrak')
  .service('UserContentService', ['HEROKU', '$http', '$state', '$cookies',
    function (HEROKU, $http, $state, $cookies) {


      var userInventory = HEROKU.URL + '/inventory_items/business_user';
      var addRepairItems = HEROKU.URL + '/repair_item';
      var getRepairItems = HEROKU.URL + '/repair_items';
      var updateQuantity = HEROKU.URL + '/repair_item/update_quantity';

      this.getUserInventory = function (){
        return $http.get(userInventory, HEROKU.CONFIG);
      };

      this.getRepairItems = function (){
        return $http.get(getRepairItems, HEROKU.CONFIG);
      };

      this.checkoutItem = function (item) {
        $http.post(addRepairItems, item, HEROKU.CONFIG)
        .success( function (data){
          console.log('success');
          $state.go('UserDash.checkout');
        });
      };

      this.repairItemUpdate = function (quantity){
        $http.patch(updateQuantity, quantity, HEROKU.CONFIG)
        .success( function (data){
          console.log('done');
          $state.go('UserDash.checkout');
        });
      };
    }

  ]);

}());

