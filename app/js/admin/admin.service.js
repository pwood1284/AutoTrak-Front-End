;(function (){

  'use strict';

  angular.module('AutoTrak')

  .service('AdminService', ['$http', '$state', 'HEROKU', '$stateParams', '$cookies',
    function ($http, $state, HEROKU, $stateParams, $cookies) {

  // ENDPOINTS
  // ==================================================              ***************
      var postEmployee = HEROKU.URL + '/employee_user/register';
      var getEmployee = HEROKU.URL + '/employee_user/business_index';
      var getEmployeeId = HEROKU.URL + '/employee_user/show/';
      var newInventory = HEROKU.URL + '/inventory_items';
      var newClient = HEROKU.URL + '/clients';
      var getClients = HEROKU.URL + '/clients/business_user';
      var getClientId = HEROKU.URL + '/client/';
      var getInventory = HEROKU.URL + '/inventory_items/business_user';
      var createVehicle = HEROKU.URL + '/vehicles';
      var getVehicles = HEROKU.URL + '/vehicles/business_user';
      var createRepair = HEROKU.URL + '/repair_order';
      var getRoBusiness = HEROKU.URL + '/repair_orders/business_user';
      var editRepOr = HEROKU.URL + '/repair_order/';
      var roEmployee = HEROKU.URL + '/repair_order/attach_employee';


    // stateParams
    // =========================================                      ***************

      var id = Number($stateParams.id);

    // post requests
    // ==========================================                     ***************

      this.createEmployee = function (user){
        $http.post(postEmployee, user, HEROKU.CONFIG)
          .success ( function (data){
            // console.log(data);
            $state.reload('admin.employee');
          });
      };

      this.createInventory = function (item){
        $http.post(newInventory, item, HEROKU.CONFIG)
          .success ( function (data){
            // console.log(data);
            $state.reload('admin.inventory');
          });
      };

      this.createCustomer = function (customer){
        $http.post(newClient, customer, HEROKU.CONFIG)
          .success ( function (data){
            // console.log(data);

            $cookies.put('access_token3', data.client.access_token3);

            $state.go('admin.vehicle');
          });
      };

      this.addVehicle = function (vehicle) {
        $http.post(createVehicle, vehicle, HEROKU.CONFIG)
          .success ( function (data){
            // console.log(data);
            $cookies.put('access_token4', data.vehicle.access_token4);
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

      this.customerGet = function (id) {
        return $http.get(getClientId + id, HEROKU.CONFIG);
      };

      this.inventoryList = function () {
        return $http.get(getInventory, HEROKU.CONFIG);
      };

      this.editRepair = function (id) {
        $state.go('admin.editRo');
        return $http.get(editRepOr + id, HEROKU.CONFIG);
      };

      this.editEmployee = function (id) {
        return $http.get(getEmployeeId + id, HEROKU.CONFIG);
      };

      this.vehicleList = function () {
        return $http.get(getVehicles, HEROKU.CONFIG);
      };

      // gets all Repair Orders by business
      // ===================================
      this.repairOrdersBusiness = function () {
        return $http.get(getRoBusiness, HEROKU.CONFIG);
      };

    }

  ]);

}());

// SearchService.goSearch().success( function (data) {
//       var singleID = Number($stateParams.id);
//       $scope.result = _.findWhere(data.questions, {profile_id: singleID});
//     });
