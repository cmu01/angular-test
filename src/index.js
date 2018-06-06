import angular from 'angular';
import ngRoute from 'angular-route';
import home from './module/homePage';
import main from './module/main';
// ================ all modules should be inject into root module.====================
const app = angular.module('movie', ['ngRoute', 'home', 'main']);

app
  .config(['$routeProvider', ($routeProvider) => {
    $routeProvider.when('/', {
      template: '<ads-movie></ads-movie>'
    })
    .when('/main', {template:'<ads-main></ads-main>'})
    .when('/resource', {template:''})
    .otherwise({redirectTo:'/'});
  }])