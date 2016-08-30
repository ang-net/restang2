/**
* Created by Pankajk.
*/

import {states} from './StateExport';

class studentController {
/*@ngInject*/
  constructor($filter, $scope ,pouchDB,Restangular, $translate,$translatePartialLoader, $http) {
    this.self = this;
    this.Restangular = Restangular;
    
    this.editFlow = false;
    this.getStudentData();
  	this.stud = {};
  	
  	this.StateList = states;
  }

  getStudentData() {
  		this.Restangular.one('/getStudentList').get().then(function(studentCollectionResult) {
            if(studentCollectionResult.status == true){
                this.studentList = studentCollectionResult.result;
            }
         }.bind(this.self));
  }

  	saveStud(student){
		this.Restangular.all('/saveStudent').post({"student":student}).then(function(response) {
        	console.log(response);
      	});
  		this.getStudentData();
  		this.stud = {}; 
  	}


  	removeStud(id){
  			this.Restangular.one('/removeStudent/' + id ).remove().then(function(response) {
  	        console.log(response);
  	      });

  		this.getStudentData();
  		this.stud = {};
  	}


  	modify(stud){
  		this.editFlow = true;
  		this.stud = stud;
  	}


  	updateStud()
  	{
  		// var passReq = Restangular.all('Partners').one('Password').customPUT(obj);
  		//this.Restangular.all('/UpdateStudent/' + this.stud._id ).post({"student":this.stud}).then(function(response) {
		
		this.Restangular.all('/UpdateStudent' ).one(this.stud._id).customPUT(this.stud).then(function(response) {  			
        	console.log(response);
      	});
  		this.getStudentData();
  		this.stud = {};
  		this.editFlow = false;
  	}

}

export default studentController;