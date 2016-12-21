"use strict";

var app = angular.module('app', ['ngRoute', 'ngCookies']);
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/',{
        templateUrl: 'partials/login.html',
        controller: 'userController',
        controllerAs: 'uC'
    })
    .when('/dashboard', {
        templateUrl: 'partials/dashboard.html',
        controller: 'userController',
        controllerAs: 'uC'
    })
    .otherwise({
        redirectTo: '/'
    });
});
