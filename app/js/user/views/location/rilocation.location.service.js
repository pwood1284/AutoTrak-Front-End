;(function (){

  'use strict';

  angular.module('AutoTrak')
  .service('RiLocationLocationService', ['HEROKU', '$http', '$state', '$cookies',
    function (HEROKU, $http, $state, $cookies) {
      var technicianRI = HEROKU.URL + '/inventory_item/:id';

      this.locationRi = function (){
        $location.path('/ri_location');
      };

      this.toLogout = function (){
        $cookies.remove('access_token5');
        $cookies.remove('access_token2');
        $state.go('keypad');
      };

      this.enterLocation = function (ri_location) {
        $http.get(technicianRI, ri_location, HEROKU.CONFIG)
        .success( function (data){
          $state.go('quantityKeypad');
          });
      };



    }]);

}());
