import angular from 'angular';
import mainTmp from '../template/main.html';
import subList from './subList.js';

const main = angular.module('main', ['subList']);

class MainController1 {
  constructor($scope) {
    $scope.title = 'Component Test';
    $scope.reset = () => {
      $scope.user.firstName = '';
      $scope.user.lastName = '';
    };
  }

  $onInit() {
    // console.log(this.title);
  }
}

const MainController = ($scope) => {
  $scope.title = 'Component Test';
  $scope.reset = () => {
    $scope.user.firstName = '';
    $scope.user.lastName = '';
  };
}

main
  .component('adsMain', {
    template: mainTmp,
    controller: MainController,
    bindings: {
      title: '<'
    }
  });

export default main;