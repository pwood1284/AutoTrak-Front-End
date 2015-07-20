;(function (){

  'use strict';

  angular.module('AutoTrak')
    .service('TokenService', [ '$cookies', 'HEROKU', '$location',

      function ($cookies, HEROKU, $location) {

      this.tokenizeHeader = function (){

        var token = $cookies.get('access_token');
        var token2 = $cookies.get('access_token2');
        var token3 = $cookies.get('access_token3');
        var token4 = $cookies.get('access_token4');
        var token5 = $cookies.get('access_token5');


        if (token) {
          HEROKU.CONFIG.headers['Access-Token'] = token;
        } else {
        // $location.path('/');
        console.log('No token');
        }

        HEROKU.CONFIG.headers['Access-Token2'] = token2;

        HEROKU.CONFIG.headers['Access-Token3'] = token3;

        HEROKU.CONFIG.headers['Access-Token4'] = token4;

        HEROKU.CONFIG.headers['Access-Token5'] = token5;

      };


    }


  ]);

}());
