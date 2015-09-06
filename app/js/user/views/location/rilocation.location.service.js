;(function (){

  'use strict';

  angular.module('AutoTrak')
  .service('RiLocationLocationService', ['HEROKU', '$location', '$http','$q', '$state', '$cookies',
    function (HEROKU, $location, $http, $q, $state, $cookies) {

      var endpoint = HEROKU.URL;
      // var getInventoryItem = HEROKU.URL + '/inventory_item_by_location/{id}';
      // GET request for the the current repair order.
        // this.getInvItem = function (id) {
        //   return $http.get(getInventoryItem, id, HEROKU.CONFIG);
        //
        //   // $cookies.put('access_token5', ro.repair_order.access_token5);
        // };

        this.getInvItem = function (param) {
          return $http.get(endpoint + "/inventory_item_by_location/" + (param.ri_location), HEROKU.CONFIG);
        };


      // var invItem = HEROKU.URL + '/inventory_item_by_location/' + data;
      // var inventoryItem = HEROKU.URL + '/inventory_item_by_location/';

      // var id = String($stateParams.id);

      // this.enterLocation = function (id){
      //   $location.path('/repair_item_location');
      // };

      // this.getInvItem = function (){
      //   return $http.get(invItem, HEROKU.CONFIG);
      // };

      // this.enterLocation = function (ri_location) {
      //   $http.get(invItem, ri_location, HEROKU.CONFIG)
      //   .success( function (data){
      //     $state.go('inventory.getItem');
      //     });
      // };

      this.toLogout = function (){
        $cookies.remove('access_token5');
        $cookies.remove('access_token2');
        $state.go('keypad');
      };

      // this.getInventoryItem = function (id){
      //   $state.go('inventory.getitem');
      //   return $http.get(inventoryItem + id, HEROKU.CONFIG);
      // };


      // this.editRepair = function (id) {
      //   $state.go('admin.editRo');
      //   return $http.get(editRepOr + id, HEROKU.CONFIG);
      // };
      // this.locationRi = function (data){
      //   $http.get(HEROKU.URL + '/repair_order/' + data, SERVER.CONFIG)
      //     .then( function (response) {
      //      var ro_num =  _.pluck(response.data, 'id');
      //   $state.go('locationKeypad');
      // });
      // }



    }]);

}());
