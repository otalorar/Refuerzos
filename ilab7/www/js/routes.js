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

  .state('menu.dispositivo', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dispositivo.html',
        controller: 'dispositivoCtrl'
      }
    }
  })

  .state('menu.red', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/red.html',
        controller: 'redCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.orientacion', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/orientacion.html',
        controller: 'orientacionCtrl'
      }
    }
  })

  .state('menu.brujula', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/brujula.html',
        controller: 'brujulaCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});