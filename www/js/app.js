// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic','ngRoute'])

app.constant('$ionicLoadingConfig', {
  template: '<div class="spinner"></div>',
  noBackdrop : true
});

app.config(function($stateProvider, $urlRouterProvider, $routeProvider) {
  $urlRouterProvider.otherwise('/location')
  
  $stateProvider.state('app', {
    abstract: true,
    templateUrl: 'templates/main.html'
  })
  
  $stateProvider.state('location',{
	  url:'/location',
	  templateUrl: 'templates/location.html',
	  controller: 'locationController',
	  name: 'location'
  })
  
  $stateProvider.state('app.explore', {
    abstract: true,
    url: '/explore',
    views: {
      explore: {
        template: '<ion-nav-view animation="slide-left-right"></ion-nav-view>'
      }
    }
  })

  $stateProvider.state('app.explore.index', 	 {
    url: '',
    templateUrl: 'templates/explore.html',
	controller: 'venuesController'

  })
  
    $stateProvider.state('app.explore.detail', {
    url: '/:venue',
    templateUrl: 'templates/venue.html',
    controller: 'venueController',
    resolve: {
      venue: function($stateParams, venuesService) {
		  
        return venuesService.getVenue($stateParams.venue)
      }
    }
  })
	
	
   $stateProvider.state('app.myplaces', {
    abstract: true,
    url: '/myplaces',
    views: {
      myplaces: {
        template: '<ion-nav-view animation="slide-left-right"></ion-nav-view>'
      }
    }
  })

  $stateProvider.state('app.myplaces.index', 	 {
    url: '',
    templateUrl: 'templates/myplaces.html',
	controller: 'myPlacesController'
  })
  
})

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
