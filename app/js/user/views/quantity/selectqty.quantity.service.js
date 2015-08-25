;(function (){

  'use strict';

  angular.module('AutoTrak')
  .service('SelectQtyQuantityService', ['HEROKU', '$http', '$state', '$cookies',
    function (HEROKU, $http, $state, $cookies) {


      // var technicianRO = HEROKU.URL + '/repair_orders/business_user';
      var technicianRO = HEROKU.URL + '/repair_orders/employee_user';
      var singleRo = HEROKU.URL + '/repair_order';

      this.getTechRO = function () {
       return $http.get(technicianRO, HEROKU.CONFIG);
      };

      this.singleRepair = function () {
        return $http.get(singleRo, HEROKU.CONFIG);
      };

      this.toLogout = function (){
        $cookies.remove('access_token5');
        $cookies.remove('access_token2');
        $state.go('keypad');
      };

    }

  ]);

}());
