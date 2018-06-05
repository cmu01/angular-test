import angular from 'angular';
import listtmp from '../template/list.html';
import lists from 'resource/movies.json';

const list = angular.module('list', []);

const comCtrl = ($scope) => {
  $scope.comment = 'it used for showing movie';
}

list
  .directive('adsComment', () => {
    return {
      replace: true,
      restrict: 'E',
      controller: comCtrl,
      template: '<p>it is good</p>',
      scope: {
        title: '<'
      },
      link: (scope) => {
        console.log(scope.title, 'show log in directive');
      }
    }
  })
  .component('adsList', {
    controller: ($scope, $http) => {
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
    },
    template: listtmp,
    bindings: {}
  });

export default list;
