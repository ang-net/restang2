/**
* Created by Pankajk.
*/
class draftController {
/*@ngInject*/
  constructor($filter, $scope ,pouchDB,Restangular, $translate,$translatePartialLoader) {
     this.draft = Restangular.all('draft');
     this.db = pouchDB('draft'); 
  }
}
export default draftController;

