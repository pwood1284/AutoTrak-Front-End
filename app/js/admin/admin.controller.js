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
        // console.log(data.employee_user);
      });

      // AdminService.editEmployee().success( function (data) {
      //   var empID = Number($stateParams.id);
      //   $scope.result = _.findWhere(data.employee_user, {id: empID});
      //   console.log(empID);
      // });

      $scope.employeeEdit = function (id){
        AdminService.editEmployee(id).success( function (data){
        $scope.editEmp = data.employee_user;
        $state.go('admin.editEmployee');
      });

      };

  // inventory
  // ==========================================                    ****************

      $scope.inventoryAdd = function (item) {
        AdminService.createInventory(item);
      };

      AdminService.inventoryList().success( function (data) {
        $scope.inventory = data.inv_item;
        console.log(data);
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
      });

      };

  // vehicles
  // ============================================                  *****************

      $scope.vehicleAdd = function (vehicle) {
        AdminService.addVehicle(vehicle);

      };

      AdminService.vehicleList().success (function (data) {
        $scope.vehicles = data.vehicle;
      });

  // Repair Orders
  // ============================================                  *****************

     $scope.repairOpen = function (ro) {
      AdminService.openRepair(ro);
     };

     $scope.empAddRo = function (em) {
      AdminService.addEmpRo(em);
     };

     AdminService.repairOrdersBusiness().success (function (data){
      $scope.openRo = data.business_repair_orders;
      console.log(data.business_repair_orders);
     });

     $scope.editRo = function (id) {
      AdminService.editRepair(id).success( function (data){
        var repairId = $stateParams.id;
        $scope.edit = data;
      });
     };

     // AdminService.repairOrders().success (function (data){
     //  $scope.repairOs = data.repair_orders;
     // });




    }

  ]);



}());
