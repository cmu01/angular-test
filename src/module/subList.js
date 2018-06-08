import angular from 'angular';
import 'css/list.css';
import listTmp from '../template/list.html';
import lists from 'resource/movies.json';

const subList = angular.module('subList', []);

const comCtrl = ($scope) => {
  $scope.comment = 'it used for showing movie';
}

// doesn't work and don't know why
// class DirectiveComponent {
//   constructor() {
//     this.template = '<h3>our movie list</h3>';
//     this.restrict = 'E';
//     this.scope = {
//       title: '<'
//     };
//   }

//   compile(tElement){
//     tElement.css('position','absolute');
//   }

//   link(scope) {
//     console.log(scope.title, 'show log in directive');
//   }

//   move(element){
//     element.css('left', (Math.random() * 500) + 'px');
//     element.css('top', (Math.random() * 500) + 'px');
//   }
// }

// directive function
const directive = ($compile) => {
  return {
    replace: true,
    restrict: 'E',
    controller: comCtrl,
    template: '<h3>it is good-----movie</h3>',
    scope: {
      title: '<'
    },
    link: (scope, element) => {
      // use compile
      const compileFn = $compile('<div>Compile test</div>');
      const $dom = compileFn(scope);
      
      element.append($dom);
    }
  };
};

const componentCtrl = ($scope, $http) => {
  $scope.list = lists;
  $scope.types = ['email', 'url', 'number', 'range', 'date', 'search', 'color', 'image', 'tel', 'submit'];
  $scope.onChange = (e) => {
    console.log(e);
  };
  $http.get('resource/movies.json')
    .then((response) => {
      $scope.list = response;
      console.log(response, 'success');
    }, (error) => {
      console.log(error, 'error');
    });
};

subList
  .directive('adsComment', directive)
  .component('adsList', {
    controller: componentCtrl,
    template: listTmp,
    bindings: {}
  });

export default subList;
