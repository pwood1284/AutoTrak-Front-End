;(function (){

  'use strict';

  angular.module('AutoTrak')

  .controller('AdminCtrl', ['$scope', '$location', 'AdminService', 'TokenService', '$stateParams', '$state', '$cookies',

    function ($scope, $location, AdminService, TokenService, $stateParams, $state, $cookies) {

      TokenService.tokenizeHeader();

      var id = Number($stateParams.id);

  // employees
  // =========================================                     ****************

      $scope.employeeCreate = function (user) {
        AdminService.createEmployee(user);
      };

      AdminService.employeeList().success( function (data) {
        $scope.employees = data.employee_user;
      });


  // inventory
  // ==========================================                    ****************

      $scope.inventoryAdd = function (item) {
        AdminService.createInventory(item);
      };

      AdminService.inventoryList().success( function (data) {
        $scope.inventory = data.inv_item;
        // console.log(data);
      });

  // customers
  // ===========================================                   ****************

      $scope.customerCreate = function (customer) {
        AdminService.createCustomer(customer);
      };

      AdminService.customerList().success( function (data) {
        $scope.customers = data.business_clients;
      });

      $scope.getCustomer = function (id) {
      AdminService.customerGet(id).success( function (data){
        $scope.customer = data.client;
        $state.go('admin.vehicle');
        console.log(data.client);
      });

      };

  // vehicles
  // ============================================                  *****************

      $scope.vehicleAdd = function (vehicle) {
        AdminService.addVehicle(vehicle);

      };

      AdminService.vehicleList().success (function (data) {
        $scope.vehicles = data.vehicle;
        console.log(data);
      });

  // Repair Orders
  // ============================================                  *****************

     $scope.repairOpen = function (ro) {
      AdminService.openRepair(ro);
     };

     AdminService.repairOrdersBusiness().success (function (data){
      $scope.openRo = data.business_repair_orders;
      console.log(data.business_repair_orders);
     });

     // AdminService.repairOrders().success (function (data){
     //  $scope.repairOs = data.repair_orders;
     // });





    }

  ]);



}());
