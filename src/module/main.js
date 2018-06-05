import angular from 'angular';
import mainTmp from '../template/main.html';
import list from './list.js';

const main = angular.module('main', ['list']);

class MainController1 {
  constructor($scope) {
    $scope.title = 'Component Test';
  }

  $onInit() {
    // console.log(this.title);
  }
}

const MainController = ($scope) => {
  $scope.title = 'Component Test';
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