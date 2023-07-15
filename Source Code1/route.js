var app = angular.module('myApp', ["ngRoute"]);
//1. Cấu hình route
app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'home.html',

        })
        .when('/biography', {
            templateUrl: 'biography.html',
           
        })
       
});//end config