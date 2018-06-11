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

function homeController() {
  this.text = 'Component Test';
  // $scope.$on('/change/movie', (e, _config) => {
  //   $scope.selected = _config;
  // });
  this.onChanged = function(index) {
    console.log(index);
    this.selected = index;
  };
};

home
  .directive('adsMovie', () => {
    return {
      replace: true,
      restrict: 'E',
      template: homeTmp,
      scope: {
        movie: '&'
      },
      controller: ($scope) => {
        $scope.movie = {
          text: 'Component Test',
          onChanged: () => {
            console.log(index);
          }
        };
        // $scope.text = 'Component Test';

        // $scope.onChanged = function(index) {
        //   console.log(index);
        //   $scope.selected = index;
        // };
      },
      link: ($scope) => {

      }
    }

  })
  // .controller('HomeController', ['$element', '$scope', HomeController])
  // .component('adsMovie', {
  //   template: homeTmp,
  //   controller: homeController,
  //   bindings: {
  //     text: '&',
  //     selected: '&',
  //     onChange: '&'
  //   }
  // });

export default home;
