;(function (){

  'use strict';

  angular.module('AutoTrak', ['ui.router', 'ngMaterial'])
    .config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider',
      function ($stateProvider, $urlRouterProvider, $mdThemingProvider){
        $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
        .accentPalette('blue');

     $urlRouterProvider.otherwise('/');

      $stateProvider
        .state ('home', {
          url: '/',
          templateUrl: 'js/home/home.tpl.html',
          controller: 'HomeCtrl'
     });

    }

  ]);

}());




