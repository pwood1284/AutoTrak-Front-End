;(function (){

  'use strict';

  angular.module('AutoTrak', ['ui.router', 'ngMaterial', 'ngCookies', 'ngAria'])

    .constant ('HEROKU', {
      URL: 'https://rocky-hollows-1826.herokuapp.com',
      CONFIG: {
        headers: {
          'Access-Token' : '',
          'Access-Token2' : ''
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
        // Home State and Login Controls
        //==============================                            *************
        .state ('home', {
          url: '/',
          templateUrl: 'js/home/home.tpl.html',
          controller: 'HomeCtrl'
        })
        .state ('companyLogin', {
          url: '/company/login',
          templateUrl: 'js/home/company.login.tpl.html',
          controller: 'HomeCtrl'
        })
        .state ('keypad', {
          url: '/main',
          templateUrl: 'js/user/user.tpl.html',
          controller: 'UserCtrl'
        })
        .state ('adminLogin', {
          url: '/admin/login',
          templateUrl: 'js/home/admin.login.tpl.html',
          controller: 'HomeCtrl'
        })

        //Admin Dashboard Routes
        //======================                                    *************

        .state ('admin', {
          url: '/admin/dashboard',
          templateUrl: 'js/admin/admin.dashboard.tpl.html',
          controller: 'AdminCtrl'
        })
        .state ('admin.employee', {
          url: '/employee',
          views: {
            'content': {
              templateUrl: 'js/admin/employee/employee.tpl.html',
              controller: 'AdminCtrl'
            },
            'rightNav': {
              templateUrl: 'js/admin/employee/new.employee.tpl.html',
              controller: 'AdminCtrl'
            }
          }
        })
        .state ('admin.inventory', {
          url: '/inventory',
          views: {
            'content': {
              templateUrl: 'js/admin/inventory/inventory.tpl.html',
              controller: 'AdminCtrl'
            },
            'rightNav': {
              templateUrl: 'js/admin/inventory/add.inventory.tpl.html'
            }
          }
        })
        .state ('admin.customer', {
          url: '/customer',
          views: {
            'content': {
              templateUrl: 'js/admin/customer/customer.tpl.html',
              controller: 'AdminCtrl'
            },
            'rightNav': {
              templateUrl: 'js/admin/customer/add.customer.tpl.html',
              controller: 'AdminCtrl'
            }
          }
        })
        .state ('admin.reports', {
          url: '/reports',
          views: {
            'content': {
              templateUrl: 'js/admin/reports.tpl.html',
              controller: 'AdminCtrl'
            }
          }
        })

        // Main Account Registration and Control
        // ======================================                   *************
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

        // User States
        // ===========                                            **************
        .state ('userLog', {
          url: '/user/login',
          templateUrl: 'js/user/user.tpl.html',
          controller: 'UserCtrl'
        });

    }

  ]);

}());




