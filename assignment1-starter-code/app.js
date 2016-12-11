( function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.input = "";
    $scope.message ="";
    $scope.myStyle = {};

    $scope.Decision  = function () {
      if ($scope.input == ""){
          $scope.message ="Please enter data first";
          $scope.color = "red";
      } else{
        var slice = $scope.input.split(',');
        var number =  slice.filter(String).length;
          $scope.color = "green";
        if (number > 3 ) {
          $scope.message =   "Too Much!";
        }else {
          $scope.message =   "Enjoy!";
        }
      }
    };
  }

})();