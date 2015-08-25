;(function (){

  'use strict';

  angular.module('AutoTrak', ['ui.router', 'ngMaterial', 'ngCookies', 'ngAria', 'ngKeypad', 'smart-table'])

    .constant ('HEROKU', {
      URL: 'https://rocky-hollows-1826.herokuapp.com',
      CONFIG: {
        headers: {
          'Access-Token' : '',
          'Access-Token2' : '',
          'Access-Token3' : '',
          'Access-Token4' : '',
          'Access-Token5' : ''
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
        //Location Keypad and Quantity Keypad Routes
        //======================                                    *************
        .state ('locationKeypad', {
          url: '/ri_location',
          templateUrl: 'js/user/views/location/rilocation.location.tpl.html',
          controller: 'RiLocationCtrl'
        })
        .state ('quantityKeypad', {
          url: '/sel_quantity',
          templateUrl: 'js/user/views/quantity/selectqty.quantity.tpl.html',
          controller: 'QuantityCtrl'
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
        .state ('admin.editEmployee', {
          url: '/employee/:id',
          views: {
            'rightNav': {
              templateUrl: 'js/admin/employee/edit.form.tpl.html',
              controller: 'AdminCtrl'
            },
            'content': {
              templateUrl: 'js/admin/employee/edit.employee.tpl.html',
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
        .state ('admin.addEmpRo', {
          url: '/add/employee',
          views: {
            'content': {
              templateUrl: 'js/admin/repair_orders/add.employee.ro.tpl.html',
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
          controller: 'UserCtrl',
        })
        .state ('userDash.list', {
          url: '/inventory/list',
          views: {
           'content': {
             templateUrl: 'js/user/views/header/user.header.tpl.html',
             controller: 'HeaderCtrl'
           }
         }
        })
        .state ('userDash.active', {
          url: '/inventory/get',
          views: {
           'content': {
             templateUrl: 'js/user/views/content/user.inventoryGet.tpl.html',
             controller: 'ContentCtrl'
           }
          }
        })
        .state ('userDash.add', {
          url: '/inventory/add',
          views: {
           'content': {
             templateUrl: 'js/user/views/content/user.inventory.add.tpl.html',
             controller: 'ContentCtrl'
           }
          }
        })
        .state ('userDash.checkout', {
          url: '/inventory/checkout',
          views: {
            'content': {
             templateUrl: 'js/user/views/checkout/user.inventoryCheckout.tpl.html',
             controller: 'CheckoutCtrl'
           }
          }
        })
        .state ('userDash.history', {
          url: '/inventory/history',
          views: {
            'content': {
             templateUrl: 'js/user/views/checkout/user.history.checkout.tpl.html',
             controller: 'CheckoutCtrl'
           }
          }
        });


    }

  ]);

}());
