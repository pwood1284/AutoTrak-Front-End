;(function (){

  'use strict';

  angular.module('AutoTrak')

  .service('AdminService', ['$http', '$state', 'HEROKU', '$stateParams',
    function ($http, $state, HEROKU, $stateParams) {

  // ENDPOINTS
  // ==================================================              ***************
      var postEmployee = HEROKU.URL + '/employee_user/register';
      var getEmployee = HEROKU.URL + '/employee_user/business_index';
      var getEmployeeId = HEROKU.URL + '/employee_user/show/';
      var newInventory = HEROKU.URL + '/inventory_items';
      var newClient = HEROKU.URL + '/clients';
      var getClients = HEROKU.URL + '/clients/business_user';
      var getInventory = HEROKU.URL + '/inventory_items/business_user';
      var createVehicle = HEROKU.URL + '/vehicles';
      var createRepair = HEROKU.URL + 'repair_order';
      var roEmployee = HEROKU.URL + 'repair_order/attach_employee';


    // stateParams
    // =========================================                      ***************

      var id = Number($stateParams.id);

    // post requests
    // ==========================================                     ***************

      this.createEmployee = function (user){
        $http.post(postEmployee, user, HEROKU.CONFIG)
          .success ( function (data){
            console.log(data);
            $state.reload('admin.employee');
          });
      };

      this.createInventory = function (item){
        $http.post(newInventory, item, HEROKU.CONFIG)
          .success ( function (data){
            console.log(data);
            $state.reload('admin.inventory');
          });
      };

      this.createCustomer = function (customer){
        $http.post(newClient, customer, HEROKU.CONFIG)
          .success ( function (data){
            console.log(data);
            $state.go('admin.vehicle');
          });
      };

      this.addVehicle = function (vehicle) {
        $http.post(createVehicle, vehicle, HEROKU.CONFIG)
          .success ( function (data){
            console.log(data);
            $state.go('admin.repairOpen');
          });
      };

      this.openRepair = function (repair) {
        $http.post(createRepair, repair, HEROKU.CONFIG)
          .success ( function (data){
            console.log (data);
            $state.go('admin.customer');
          });
      };

    // get requests
    // ===========================================                   ***************

      this.employeeList = function () {
        return $http.get(getEmployee, HEROKU.CONFIG);
      };

      this.customerList = function () {
        return $http.get(getClients, HEROKU.CONFIG);
      };

      this.inventoryList = function () {
        return $http.get(getInventory, HEROKU.CONFIG);
      };

      // this.editEmployee = function () {
      //   return $http.get(getEmployeeId + id, HEROKU.CONFIG);
      // };
      this.vehicleList = function () {
        return $http.get(getVehicles, HEROKU.CONFIG);
      };

      this.repairOrders = function () {
        return $http.get(getRepairs, HEROKU.CONFIG);
      };

    }

  ]);

}());

// SearchService.goSearch().success( function (data) {
//       var singleID = Number($stateParams.id);
//       $scope.result = _.findWhere(data.questions, {profile_id: singleID});
//     });
