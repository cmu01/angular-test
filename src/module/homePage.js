import angular from 'angular';
import homeTmp from '../template/home.html';
import list from './home/list.js';
import img from './home/image.js';

import 'css/home.css';

const home = angular.module('home', ['list', 'img']);

class HomeController {
  constructor($element, $scope) {
    this.element = $element[0];
    this.scope = $scope;
    this.text = 'Component Test';
  }

  $onInit() {
    console.log(this.text, this.scope.firstName);
    // this.scope.$on('/change/movie', (e, _config) => {
    //   console.log(e, _config);
    // });
  }

  $onChanges() {
    
  } 
};

// home.controller('HomeController', ['$element', '$scope', HomeController])
//   .component('adsMovie', {
//     bindings: {
//       firstName: '<',
//       // options: '<'
//     },
//     controller: 'HomeController',
//     template: homeTmp
//   });

const homeController = function($element, $scope) {
  this.text = 'Component Test';
  $scope.$on('/change/movie', (e, _config) => {
    $scope.selected = _config;
  });
  $scope.onChange = (index) => {
    console.log(index);
    $scope.selected = index;
  };
};

home
  // .controller('HomeController', ['$element', '$scope', HomeController])
  .component('adsMovie', {
    controller: homeController,
    template: homeTmp,
    bindings: {
      firstName: '<',
      selected: '&',
      onChange: '&'
    }
  });

export default home;
