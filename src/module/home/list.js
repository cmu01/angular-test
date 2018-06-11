import angular from 'angular';
import listTmp from 'template/home/list.html';
import names from 'resource/movies.json';

const list = angular.module('list', []);

function componentCtrl() {
  const ctrl = this;

  ctrl.names = names;

  // ctrl.$onInit = function () {
  //   ctrl.changeView = function(index) {
  //     //console.log(this.parentCtrl.onChange({index}));
  //     // $scope.selected = index;
  //     //  $rootScope.$broadcast('/change/movie', index);
  //     parentCtrl.onChange(index);
  //   };
  // };
  ctrl.changeView = function(index) {
    //console.log(this.parentCtrl.onChange({index}));
    // $scope.selected = index;
    //  $rootScope.$broadcast('/change/movie', index);
    ctrl.parentCtrl.onChange(index);
  };
  console.log(names);
};

list
.directive('nameList', function() {
  return {
    replace: true,
    restrict: 'E',
    scope: {
      movie: '&'
    },
    controller: ($scope) => {
      $scope.names = names;
      $scope.vm = {
        changeView: function(index) {
          console.log('click', index);
        }
      };
      $scope.init = function(){
        console.log('init');
      }
    },
    template: listTmp,
    link: ($scope) => {
    }
  }
})
  // .component('nameList', {
  //   require: {
  //     parentCtrl: '^^adsMovie'
  //   },
  //   template: listTmp,
  //   controller: componentCtrl,
  //   bindings: {
  //     selected: '&',
  //     onChange: '@'
  //   }
  // });

export default list;