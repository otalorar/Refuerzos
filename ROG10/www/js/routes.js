angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.lista', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lista.html',
        controller: 'listaCtrl'
      }
    }
  })

  .state('menu.detalle', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/detalle.html',
        controller: 'detalleCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.crear', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/crear.html',
        controller: 'crearCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});