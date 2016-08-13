angular.module('app.controllers', ['app.services'])
  
.controller('pRODUCTOSAPMCtrl', ['$scope', '$stateParams', 'productService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, productService) {

	$scope.getProductList = function(){
		productService.item_list.query(function(data){

        	$scope.list = data;

        	console.log($scope.list);
    });
	}
}])
 