'use strict';

/**
 * @ngdoc overview
 * @name utorrentNgwebuiApp
 * @description
 * # utorrentNgwebuiApp
 *
 * Main module of the application.
 */
 angular
 .module('utorrentNgwebuiApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ui.bootstrap',
  'vs-repeat',
  'ng-context-menu',
  'toastr'
  ]).config(function ($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'TorrentsCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .when('/settings', {
      templateUrl: 'views/settings.html',
      controller: 'SettingsCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  })
/*
  .directive('resizable', function($window) {
        return function($scope) {

        // On window resize => resize the app
        $scope.initializeWindowSize = function() {
            $scope.windowHeight = $window.innerHeight;
            $scope.windowWidth = $window.innerWidth;
        };

        angular.element($window).bind('resize', function() {
            $scope.initializeWindowSize();
            $scope.$apply();
        });

        // Initiate the resize function default values
        $scope.initializeWindowSize();
    };
  })
*/
  .controller('NavController', function(){});
