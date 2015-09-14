;(function (){

  'use strict';

  angular.module('AutoTrak')
  .service('UserReturnService', ['HEROKU', '$http', '$state', '$cookies', '$stateParams',
    function (HEROKU, $http, $state, $cookies, $stateParams) {

      var getRepairItem = HEROKU.URL + '/repair_item/';
      var checkoutItems = HEROKU.URL + '/repair_items/checkout';


      this.getRepairItemById = function (param) {
        return $http.get(getRepairItem + (param.itemid), HEROKU.CONFIG);
        console.log(param.itemid);
      };

      this.checkoutRepair = function (data){
        $http.patch(checkoutItems, data, HEROKU.CONFIG)
        .success( function (x){
          $cookies.remove('access_token5');
          $cookies.remove('access_token2');
          $state.go('keypad');
        });
      };

      this.toLogout = function (){
        $cookies.remove('access_token5');
        $cookies.remove('access_token2');
        $state.go('keypad');
      };
    }
  ]);
}());
