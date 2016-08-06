angular.module('lab1c', [])
               .controller('lab1ccontroller', ['$scope', function($scope){

                     $scope.image = function(){
                       
                        $scope.imagen="http://dummyimage.com/200x200/000/34ffddaa";
                    };
                    $scope.changeimage = function(){
                       
                         $scope.imagen="http://dummyimage.com/300x400/000/34ffddaa";
                     };
                 }]);