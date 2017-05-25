'use strict';
app.controller('collectionDepositCtrl', ['$scope', '$location', function ($scope, $location) {

  $scope.some = "Hello World";

  $scope.collection = [{"fname":"John","lname":"Doe","uname":"johndoe"},
  					   {"fname":"Stephen","lname":"Smith","uname":"stevesmith"}, 
  					   {"fname":"David","lname":"Warner","uname":"davewarner"}];

  $scope.accountList = [{"name":"Daily"},{"name":"Monthly"}];
  $scope.myArrayOfDates = [moment().date(4), moment().date(5), moment().date(8)];

  $scope.$watch('myArrayOfDates', function(newValue, oldValue){
    if(newValue){
        console.log('my array changed, new size : ' + newValue.length);
        console.log('my array :' + newValue);
    }
  }, true);
  $scope.today = moment();
  
}]);