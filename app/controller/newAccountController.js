'use strict';
app.controller('newAccountController', ['$scope', '$location', function ($scope, $location) {

  $scope.some = "Hello World";

  $scope.direct = function () {
  	$location.path("/collectionDeposit");
  }

}]);