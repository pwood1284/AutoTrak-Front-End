;(function (){
  'use strict';
  angular.module('AutoTrak')
  .service('UserHeaderService', ['HEROKU', '$http', '$state', '$cookies',
    function (HEROKU, $http, $state, $cookies) {
    // Rails routes to server.
      var techROs = HEROKU.URL + '/repair_orders/employee_user';
      var selRo = HEROKU.URL + '/repair_order';
    // Get all repair orders for the currently logged in technician.
      this.getTechRO = function () {
        return $http.get(techROs, HEROKU.CONFIG);
      };
    // GET request for the the current repair order.
      this.getSelRO = function () {
        return $http.get(selRo, HEROKU.CONFIG);
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
