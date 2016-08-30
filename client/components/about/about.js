import angular from 'angular';
import uiRouter from 'angular-ui-router';
import aboutComponent from './about.component';
import ocLazyLoad from 'oclazyload';
import angulartranslateloaderpartial from 'angular-translate-loader-partial';
import angulartranslate from 'angular-translate';

let aboutModule = angular.module('about', [
  uiRouter,
  ocLazyLoad,
  angulartranslateloaderpartial
])

.config(($stateProvider, $compileProvider, $translatePartialLoaderProvider) => {
  "ngInject";

  $translatePartialLoaderProvider.addPart('about');
              
  $stateProvider
    .state('about', {
      url: '/about',
      template: '<about></about>'

     /*resolve: {

        loadComponent: ($q, $ocLazyLoad,$translatePartialLoader) => {
          $translatePartialLoader.addPart('about');
           var deferred = $q.defer();

           require.ensure([], function(require) {
           let component = require('./about.component');

              $ocLazyLoad.inject([
               // component.name
             ])
            .then(

            	() => $compileProvider.directive('about', 
            		    function (){
            			   return component;
					          }
            		)
            	)

            .then(deferred.resolve);

          }, 'about'); // Name our bundle so it shows up pretty in the network tab

           return deferred.promise
         }
      }*/
    });
})
.component('about', aboutComponent);

export default aboutModule;
