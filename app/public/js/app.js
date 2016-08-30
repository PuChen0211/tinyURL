/**
 * Created by puchen on 8/14/16.
 */
var app = angular.module('tinyurlApp', ['ngRoute', 'ngResource', 'chart.js']);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "./public/views/home.html",
            controller: "homeController"
        })
        .when("/urls/:shortUrl", {
            templateUrl: "./public/views/url.html",
            controller: "urlController"
        });
});