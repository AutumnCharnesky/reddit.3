var app = angular.module("appMod", ["ngRoute"]);
 console.log("raraahahah");

 app.config(function($routeProvider) {
   $routeProvider
   .when("/redditview", {
     controller: "controlMod",
     templateUrl: "redditView.html"
   })
 })
