;(function (){

  'use strict';

  angular.module('AutoTrak')
    .controller('SuperUser', ['$scope', 'SuperService',
      function ($scope, SuperService) {

        console.log('Hi from SuperUser');

        SuperService.superCreate();

    }

  ]);

}());
