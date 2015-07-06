;(function (){

  'use strict';

  angular.module('AutTrak', ['ui-router', 'ngMaterial'])

  .config( function ($mdThemingProvider){
    $mdThemingProvider.theme('default')
    .primaryPalette('blue grey')
    .accentPalette('blue');

  });

}());
