import angular from 'angular';
import ngRoute from 'angular-route';
import home from './module/homePage.js'

const app = angular.module('movie', ['ngRoute', 'home']);
const ctrl = ($scope) => {
  $scope.firstName = 'John';
  $scope.lastName = 'Doe';
};

class Ctrl {
  constructor($scope) {
    $scope.firstName = 'John';
    $scope.lastName = 'Doe';
    this.scope = $scope;
    this.text = 'Component Test';
  }

  $onInit() {
    console.log(this.text, this.scope.firstName);
  }
};


app.controller('Ctrl', ['$scope', Ctrl])
.config(['$routeProvider', ($routeProvider) => {
  $routeProvider.when('/', {
    template: '<ads-movie></ads-movie>',
    controller: 'Ctrl'
  })
  .when('/printers', {template:'这是打印机页面'})
  .otherwise({redirectTo:'/'});
}])