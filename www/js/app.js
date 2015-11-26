// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller: 'NavBarCtrl'
  })

  // Each tab has its own nav history stack:
  .state('tab.jeep', {
      url: '/jeep',
      views: {
        'tab-jeep': {
          templateUrl: 'templates/tab-jeep.html',
          controller: 'JeepCtrl'
        }
      }
    })

  .state('tab.jeep-detail', {
    url: '/jeeps/:jeepId',
    views: {
      'tab-jeep': {
        templateUrl: 'templates/jeep-detail.html',
        controller: 'JeepDetailCtrl'
      }
    }
  })

  .state('tab.maps', {
    url: '/jeeps/:jeepId/maps',
    views: {
      'tab-jeep': {
        templateUrl: 'templates/tab-maps1.html',
        controller: 'MapsCtrl'
      }
    }
  })

  .state('tab.findroute', {
    url: '/findroute',
    views: {
      'tab-findroute': {
        templateUrl: 'templates/tab-findroute.html',
        controller: 'FindRouteCtrl'
      }
    }
  })


  .state('tab.findroute-maps', {
    url: '/findroute/:fromId/:toId/maps',
    views: {
      'tab-findroute': {
        templateUrl: 'templates/tab-maps2.html',
        controller: 'MapsCtrl'
      }
    }
  })




  .state('tab.howto', {
    url: '/howto',
    views: {
      'tab-howto': {
        templateUrl: 'templates/tab-howto.html',
        controller: 'HowToCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/jeep');

});
