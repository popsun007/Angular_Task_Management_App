var myApp = angular.module("myApp", ['ngRoute']);
myApp.config(function($routeProvider)
{
	$routeProvider
	.when("/", {
		templateUrl: "partials/task.html"
	})
});
angular.module('testApp', ['datePicker']);