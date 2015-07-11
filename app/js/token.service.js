;(function (){

  'use strict';

  angular.module('AutoTrak')
    .service('TokenService', [ '$cookies', 'HEROKU', '$location',

      function ($cookies, HEROKU, $location) {

      this.tokenizeHeader = function (){

        var token = $cookies.get('access_token');
        var token2 = $cookies.get('access_token2');

        if (token) {
          HEROKU.CONFIG.headers['Access-Token'] = token;
          console.log(token);
        } else {
        // $location.path('/');
        console.log('No token');
        }

        HEROKU.CONFIG.headers['Access-Token2'] = token2;
      };


    }


  ]);

}());
