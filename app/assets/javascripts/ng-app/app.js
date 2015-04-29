angular
    .module('AngularRails', [
        'ngRoute',
        'templates'
    ]).config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home.html',
                controller: 'HomeCtrl'
            });
        // the below line gives error
        // $locationProvider.html5Mode(true);
    });