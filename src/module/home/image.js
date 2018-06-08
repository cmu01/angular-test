import angular from 'angular';
import imgTmp from 'template/home/image.html';
import dhxy from 'resource/img/dhxy.jpg';
import dnmt from 'resource/img/dnmt.jpg';
import glgs from 'resource/img/glgs.png';

const img = angular.module('img', []);

img.component('imgShow', {
  controller: ($scope) => {
    
    // $scope.$watch('selected', (newValue, oldValue) => {
    //   console.log(newValue, oldValue);
    // }, true);
    $scope.img = {
      src: "src/resource/img/glgs.png",
      name: ($scope.selected || {}).name || 'glgs',
      comment: 'it is my favorate movie'
    }
  },
  template: imgTmp,
  bindings: {
    selected: '='
  }
});

export default img;