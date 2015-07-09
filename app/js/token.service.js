;(function (){

  'use strict';

  angular.module('AutoTrak')
    .service('TokenService', [ '$cookies', 'HEROKU', '$location',

      function ($cookies, HEROKU, $location) {

      this.tokenizeHeader = function (){

        var token = Cookies.get('authtoken');

        if (token) {
          HEROKU.CONFIG.headers['Access-Token'] = token;
          console.log(token);
        } else {
        // $location.path('/');
        console.log('No token');
        }

      };


    }


  ]);

}());
