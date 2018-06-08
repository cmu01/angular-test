import angular from 'angular';
import listTmp from 'template/home/list.html';
import names from 'resource/movies.json';

const list = angular.module('list', []);

function componentCtrl($scope, $rootScope) {
  $scope.names = names;
  $scope.changeView = (index) => {
    // console.log(index);
    // $scope.selected = index;
  //  $rootScope.$broadcast('/change/movie', index);
    this.onChange(index)
  };
  console.log(names);
};

class ComponentCtrl {
  constructor($scope) {
    $scope.names = names;
    $scope.changeView = (index) => {
      // console.log(index);
      // $scope.selected = index;
    //  $rootScope.$broadcast('/change/movie', index);
      this.onChange(index)
    };
  }

  $onInit() {
    // this.onChange(index);
  }
}

list
  .component('nameList', {
    controller: ComponentCtrl,
    template: listTmp,
    bindings: {
      selected: '&',
      onChange: '@'
    }
  });

export default list;