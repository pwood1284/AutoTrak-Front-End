;(function (){

  'use strict';

  angular.module('AutoTrak')
  .controller('HeaderCtrl', ['UserService', '$scope', 'TokenService',

    function (UserService, $scope, TokenService) {

      TokenService.tokenizeHeader();

       UserService.getTechRO().success( function (data){
        console.log(data);
      });

    }

  ]);

}());
