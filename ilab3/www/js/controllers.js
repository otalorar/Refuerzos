angular.module('app.controllers', ['ngCordova'])
  
.controller('page1Ctrl', ['$scope', '$stateParams', '$cordovaDevice', '$cordovaDeviceMotion',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDevice) {
	$scope.setDeviceInformation = function(){
		localStorage.setItem('device',$cordovaDevice.getDevice())

    	localStorage.setItem('cordova',$cordovaDevice.getCordova())

   		localStorage.setItem('model',$cordovaDevice.getModel())

    	localStorage.setItem('platform',$cordovaDevice.getPlatform())

  		localStorage.setItem('uuid',$cordovaDevice.getUUID())

    	localStorage.setItem('version',$cordovaDevice.getVersion())
	}

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
   
.controller('page3Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
$scope.getDeviceInformation = function(){
		$scope.device =localStorage.getItem('device')

    	$scope.cordova =localStorage.getItem('cordova')

   		$scope.model =localStorage.getItem('model')

    	$scope.platform =localStorage.getItem('platform')

  		$scope.uuid =localStorage.getItem('uuid')

    	$scope.version =localStorage.getItem('version')
   	}

}])
   
.controller('page4Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
    

