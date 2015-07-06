;(function (){

  'use strict';

  angular.module('AutTrak', ['ui-router', 'ngMaterial'])

  .config( function ($mdThemingProvider, $stateProvider, $urlRouterProvider){
    $mdThemingProvider.theme('default')
    .primaryPalette('blue grey')
    .accentPalette('blue');

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: 'js/main/main.tpl.html'
  });


  });

}());
