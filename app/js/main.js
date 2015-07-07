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
        })
        .state ('super', {
          url: '/create/account',
          templateUrl: '/js/superUser/superUser.tpl.html',
          controller: 'SuperUser'
        })
        .state ('super/home', {
          url: '/super/home',
          templateUrl: '/js/superUser/superHome.tpl.html',
          controller: 'SuperUser'
        })
        .state ('userLog', {
          url: '/user/login',
          templateUrl: 'js/user/user.tpl.html',
          controller: 'UserCtrl'
        });

    }

  ]);

}());




