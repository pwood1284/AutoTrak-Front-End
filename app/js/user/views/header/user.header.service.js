;(function (){
  'use strict';
  angular.module('AutoTrak')
  .service('UserHeaderService', ['HEROKU', '$http', '$state', '$cookies',
    function (HEROKU, $http, $state, $cookies) {
    // Rails routes to server.
      var techROs = HEROKU.URL + '/repair_orders/employee_user';
      var currentRo = HEROKU.URL + '/repair_order';
      var selectRO = HEROKU.URL + '/repair_order/';
      var endpoint = HEROKU.URL;
    // Get all repair orders for the currently logged in technician.
      this.getTechRO = function () {
        return $http.get(techROs, HEROKU.CONFIG);
      };
    // GET request for the the current repair order.
      this.getcurrentRO = function () {
        return $http.get(currentRo, HEROKU.CONFIG);

      };
      // GET request for the the selected repair order.
        this.getSelRO = function (param) {
          return $http.get(endpoint + "/repair_order/" + param.ro, HEROKU.CONFIG);


        };
    // Logout button.
      this.toLogout = function (){
        $cookies.remove('access_token5');
        $cookies.remove('access_token2');
        $state.go('keypad');
      };
    }
  ]);
}());
