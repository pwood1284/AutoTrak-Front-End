;(function (){

  'use strict';

  angular.module('AutoTrak')
  .service('EditEmployeeService', [ '$q',

    function($q){

      this.emp = sessionStorage.getItem('employee') || {};
      // console.log('emp-service', sessionStorage.getItem('employee'));

      // var employeeDeferred = $q.defer();

      this.currentEmp = function (emp){
       this.emp = emp;
       sessionStorage.setItem('employee', emp.employee_user);
       // employeeDeferred.resolve(emp);
      };

      // this.promise = function (){
      //   return employeeDeferred.promise;
      // };

    }

  ]);

}());
