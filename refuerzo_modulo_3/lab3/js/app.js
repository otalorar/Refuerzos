angular.module('lab1d', ['ngRoute'])
               .config(['$routeProvider', function($routeProvider){

            /*
             * `when()` cuantas veces sea necesario
             * `otherwise()` una sola vez "OJO"
            */
            $routeProvider

            .when('/lab1', {
                templateUrl : "hello.html"
            })
            
            .when('/lab2', 
                {
                    templateUrl: "message-one.html"
                })

            .when('/lab3',
                    {
                        templateUrl: "message-two.html"
            })

           
            .otherwise({
                redirectTo: '/',
                templateUrl: 'otherwise.html'
            });

               }])