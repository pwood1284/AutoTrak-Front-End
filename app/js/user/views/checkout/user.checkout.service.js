;(function (){

  'use strict';

  angular.module('AutoTrak')
  .service('UserCheckoutService', ['HEROKU', '$http', '$state', '$cookies',
    function (HEROKU, $http, $state, $cookies) {

      var getInventoryItems = HEROKU.URL + '/repair_items';

      this.getRepairItems = function (){
        return $http.get(getInventoryItems, HEROKU.CONFIG);
      };

    }

  ]);

}());
