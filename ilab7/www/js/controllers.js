angular.module('app.controllers', ['ngCordova'])
  
.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('dispositivoCtrl', ['$scope', '$stateParams', '$cordovaDevice',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDevice) {
      $scope.getDeviceInformation = function (){
     	$scope.device = $cordovaDevice.getDevice();

	    $scope.cordova = $cordovaDevice.getCordova();

	    $scope.model = $cordovaDevice.getModel();

	    $scope.platform = $cordovaDevice.getPlatform();

	    $scope.uuid = $cordovaDevice.getUUID();

	    $scope.version = $cordovaDevice.getVersion();

	 }


}])
   
.controller('redCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('orientacionCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('brujulaCtrl', ['$scope', '$stateParams', '$cordovaDeviceMotion', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDeviceMotion) {
  $scope.getCurrentDeviceMotion = function(){
    $cordovaDeviceMotion.getCurrentAcceleration().then(function(result) {
          $scope.x = result.x;
          $scope.y = result.y;
          $scope.z = result.z;
          $scope.timeStamp = result.timestamp;
      }, function(err) {
        // An error occurred. Show a message to the user
      });
  }

}])
 