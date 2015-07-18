;(function (){

  'use strict';

  angular.module('AutoTrak')

  .controller('AdminCtrl', ['$scope', '$location', 'AdminService', 'TokenService', '$stateParams', '$state',

    function ($scope, $location, AdminService, TokenService, $stateParams, $state) {

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
        console.log(data.business_clients[0].id);
      });

      $scope.getCustomer = function (id) {
      AdminService.customerGet(id).success( function (data){
        $state.go('admin.vehicle');
        $scope.customer = data.client;
        console.log(data.client);
      });
      };

  // vehicles
  // ============================================                  *****************

      $scope.vehicleAdd = function (vehicle) {
        AdminService.addVehicle(vehicle);
      };

      // AdminService.vehicleList().success (function (data) {
      //   $scope.vehicles = data.vehicle;
      // });

  // Repair Orders
  // ============================================                  *****************

     $scope.repairOpen = function (ro) {
      AdminService.openRepair(ro);
     };

     // AdminService.repairOrders().success (function (data){
     //  $scope.repairOs = data.repair_orders;
     // });





    }

  ]);



}());
