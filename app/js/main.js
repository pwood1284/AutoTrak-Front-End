;(function (){

  'use strict';

  angular.module('AutoTrak', ['ui.router', 'ngMaterial', 'ngCookies'])

    .constant ('HEROKU', {
      URL: 'https://rocky-hollows-1826.herokuapp.com',
      CONFIG: {
        headers: {
          'Access-Token' : '8251875752e5cbcd04ef7555a2e189b7'
        }
      }

    })

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
        .state ('master/create', {
          url: '/master/create',
          templateUrl: 'js/superUser/master.user.tpl.html',
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




