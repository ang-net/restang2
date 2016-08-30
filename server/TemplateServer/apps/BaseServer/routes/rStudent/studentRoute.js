/**
 * Created by Pankajk.
 */
'use strict'
let co = require('co');
let joi = require('joi');
let JWT   = require('jsonwebtoken');
let configHelper = require('./../../../../JOS/configHelper');

let index = require('./../../index');
let studentCollectionService = require("./../../services/sStudent/studentService");


//written by Pankajk
let getStudentList = {
    method: "GET", path: index+"/getStudentList", config: {
        auth: false,
        description: 'get list of student collection objects',
        notes: 'get a node based on node id',
        tags: ['node', 'get']
    },
    handler: function(request, reply) {
        co(function* () {
            try {

                var result = yield studentCollectionService.getStudentList();
                reply(result);

            }catch (e) {
                console.error(e.stack);
                reply(e);
            }
        });
    }
};

//written by pankajk
let saveStudent = {
    method: "POST", path: index+"/saveStudent", config: {
        auth: false,
        description: 'This API saves Student information',
        notes: 'Save student list ',
        tags: ['saveStudent','tag1', 'tag2']
    },
    handler: function(request, reply) {
        co(function* () {
            //console.log("in router");
            try {
                
                let student = request.payload.student;
                let result = yield studentCollectionService.save(student);
                //console.log(JSON.stringify(result));
                reply("ok");
            }catch (e) {
                console.error(e.stack);
                reply({text: 'error'});
            }
        });
    }
};


//written by 
let removeStudent = {
    method: "DELETE", path: index+"/removeStudent/{id}", config: {
        auth: false,
        description: 'This API deletes removeStudent object from DB',
        notes: ' did not put any notes for this API ',
        tags: ['removeStudent','tag1', 'tag2']
    },
    handler: function(request, reply) {
        co(function* () {
            try {
                
                 let id = request.params.id;
                //delete data using id and send back a reply
                let result = yield studentCollectionService.remove(id);
                console.log(JSON.stringify(result));
                reply("data deleted");
            }catch (e) {
                console.error(e.stack);
                reply({text: 'error'});
            }
        });
    }
};  


    //written by 
    let updateStudent = {
    method: "PUT", path: index+"/UpdateStudent/{id}", config: {
        auth: false,
        description: 'This API updates UpdateStudent object',
        notes: ' ',
        tags: ['UpdateStudent','tag1', 'tag2']
    },
    handler: function(request, reply) {
        co(function* () {
            try {
            
                let UpdateStudentObject = request.payload;
                let result = yield studentCollectionService.udpate(UpdateStudentObject);
                reply("data replaced");
            } catch (e) {
                console.error(e.stack);
                reply({text: 'error'});
            }
        });
    }
};



module.exports = [getStudentList, saveStudent, removeStudent, updateStudent];