import angular from 'angular';

const home = angular.module('home', []);

class HomeController {
  constructor($element, $scope) {
    this.element = $element[0];
    this.scope = $scope;
    this.text = 'Component Test';
  }

  $onInit() {
    console.log(this.text, this.scope.firstName);
  }
};

home.controller('HomeController', ['$element', '$scope', HomeController])
  .component('adsMovie', {
    bindings: {
      firstName: '<',
      // options: '<'
    },
    controller: 'HomeController',
    template: '<h1>Component</h1>'
  });

export default home;
