angular.module('r3lab1a',  [])
.controller('lab1aController', function($scope){

	$scope.reset = function(){
		$scope.firstName = 'Rafael Otalora G.';
		$scope.idn = 79462710;
		$scope.profession = 'Ingeniero',
		$scope.salary = 11000000;
		$scope.phone = 3108162504;
		$scope.address = "Buena suerte cajica";
	}

	$scope.reset();
});