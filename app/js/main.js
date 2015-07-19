;(function (){

  'use strict';

  angular.module('AutoTrak', ['ui.router', 'ngMaterial', 'ngCookies', 'ngAria', 'ngKeypad'])

    .constant ('HEROKU', {
      URL: 'https://rocky-hollows-1826.herokuapp.com',
      CONFIG: {
        headers: {
          'Access-Token' : '',
          'Access-Token2' : '',
          'Access-Token3' : '',
          'Access-Token4' : ''
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
        // .state ('test', {
        //   url: '/test',
        //   templateUrl: 'js/user/test.keypad.tpl.html',
        //   controller: 'Keypad'
        // })

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
        .state ('admin.editEmployee', {
          url: '/employee/:id',
          views: {
            'content': {
              templateUrl: 'js/admin/employee/edit.employee.tpl.html',
              conteroller: 'AdminCtrl'
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
        .state ('admin.vehicle', {
          url: '/vehicle',
          views: {
            'content': {
              templateUrl: 'js/admin/vehicles/add.vehicle.tpl.html',
              controller: 'AdminCtrl'
            },
            'rightNav': {
              templateUrl: 'js/admin/vehicles/edit.vehicle.tpl.html',
              controller: 'AdminCtrl'
            }
          }
        })
        .state ('admin.repairOpen', {
          url: '/repair',
          views: {
            'content': {
              templateUrl: 'js/admin/repair_orders/create.ro.tpl.html',
              controller: 'AdminCtrl'
            },
            'rightNav': {
              templateUrl: 'js/admin/repair_orders/edit.ro.tpl.html',
              controller: 'AdminCtrl'
            }
          }
        })
        .state ('admin.reportRo', {
          url: '/report/open',
          views: {
            'content': {
              templateUrl: 'js/admin/repair_orders/list.open.ro.tpl.html',
              controller: 'AdminCtrl'
            }
          }
        })
        .state ('admin.editRo', {
          url: '/edit/repair/:id',
          views: {
            'content': {
              templateUrl: 'js/admin/repair_orders/edit.ro.tpl.html',
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
        })
        .state ('userDash', {
          url: '/technician/dashboard',
          templateUrl: 'js/user/user.dashboard.tpl.html',
          controller: 'UserCtrl'
        });

    }

  ]);

}());




