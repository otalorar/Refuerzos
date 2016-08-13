angular.module('app.controllers', ['ngCordova'])
  
.controller('ventanasDeDialogoCtrl', ['$scope', '$stateParams', '$cordovaDialogs',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName

function ($scope, $stateParams, $cordovaDialogs) {
	$scope.getDialogAlert = function(){
		$cordovaDialogs.alert('message', 'title', 'button name')
		    .then(function() {
		      console.log('Click en el boton');
		      localStorage.setItem('alert',"El usuario se informo");
		    });
		};

	$scope.getDialogConfirm = function(){
		$cordovaDialogs.confirm('message', 'title', ['button 1','button 2'])
		    .then(function(buttonIndex) {
		      // no button = 0, 'OK' = 1, 'Cancel' = 2
		      var btnIndex = buttonIndex;
		      localStorage.setItem('confirm',"El usuario selecciono la opción");
		      localStorage.setItem('confirmV',btnIndex);
		      console.log( localStorage.getItem('confirm') + btnIndex);
    		});
	};

  
     $scope.getDialogPromtp = function(){
     	$cordovaDialogs.prompt('msg', 'title', ['btn 1','btn 2'], 'default text')
		    .then(function(result) {
		      var input = result.input1;
		      // no button = 0, 'OK' = 1, 'Cancel' = 2
		      var btnIndex = result.buttonIndex;
		      localStorage.setItem('prompt1',"El usuario selecciono la opción");
		      localStorage.setItem('prompt2',btnIndex);
		      localStorage.setItem('prompt3',input);
		      console.log(localStorage.getItem('prompt1') + " " + btnIndex + " " + localStorage.getItem('prompt3') );
    	});
     };
  

}])
 