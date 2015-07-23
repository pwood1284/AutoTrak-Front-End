;(function (){

  'use strict';

  angular.module('AutoTrak')
  .service('UserCheckoutService', ['HEROKU', '$http', '$state', '$cookies',
    function (HEROKU, $http, $state, $cookies) {

      var getRepairItems = HEROKU.URL + '/repair_items';
      var checkoutItems = HEROKU.URL + '/repair_items/checkout';
      var checkoutHistory = HEROKU.URL + '/repair_items/history';

      this.getRepairItems = function (){
        return $http.get(getRepairItems, HEROKU.CONFIG);
      };

      this.checkoutRepair = function (data){
        $http.patch(checkoutItems, data, HEROKU.CONFIG)
        .success( function (x){
          // $cookies.remove('access_token5');
          $state.go('userDash.history');
        });
      };

      this.checkoutHistory = function (){
        return $http.get(checkoutHistory, HEROKU.CONFIG);
      };

    }

  ]);

}());
