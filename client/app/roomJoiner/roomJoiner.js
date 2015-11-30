angular.module('app.joiner', ['ngOpenFB'])
.controller('RoomJoinerController', ['$scope','$openFB','$location', 'UserHelper', function ($scope, $openFB, $location, UserHelper) {
  $scope.roomName = '';
  $scope.hideJoin = true;

  $scope.setRoom= function () {
    UserHelper.getRoom($scope.roomName);
    UserHelper.isCreator = false;
    $location.path('/roomGuest');
  };

  $scope.logout = function () {
    $openFB.logout();
  };

  $scope.showJoin = function () {
    $scope.hideJoin = false;
    console.log("CALLED ", $scope.hideJoin)
  };
}]);
