//written by Pankajk
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import studentComponent from './student.component';
import angulartranslateloaderpartial from 'angular-translate-loader-partial';

let studentModule = angular.module('student', [
  uiRouter,
  angulartranslateloaderpartial
])

.config(($stateProvider, $urlRouterProvider,$translatePartialLoaderProvider) => {
  "ngInject";
  $translatePartialLoaderProvider.addPart('student');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('student', {
      url: '/student',
      template: '<student></student>'
    });
})

.component('student', studentComponent);

export default studentModule;
