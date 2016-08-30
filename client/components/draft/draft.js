//written by Pankajk
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import draftComponent from './draft.component';
import angulartranslateloaderpartial from 'angular-translate-loader-partial';

let draftModule = angular.module('draft', [
  uiRouter,
  angulartranslateloaderpartial
])

.config(($stateProvider, $urlRouterProvider,$translatePartialLoaderProvider) => {
  "ngInject";
  $translatePartialLoaderProvider.addPart('draft');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('draft', {
      url: '/draft',
      template: '<draft></draft>'
    });
})

.component('draft', draftComponent);

export default draftModule;
