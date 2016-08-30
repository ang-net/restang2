/**
 * Created by
 */

'use strict'
let co = require('co');
let coDal = require('./../../../../JOS/DALNoSql');
let mongodb = require('mongodb');



// written by 
exports.getStudentList = co.wrap(function*() {

    let requestStatus = {
        status : false
    };

    try {
        console.log("here in service");
        let db = yield coDal.getNoSqlDB();
        let result = yield db.student.find().toArray();
        requestStatus.status = true;
        requestStatus.result = result;

    } catch (err) {
        console.error(err.stack);
        requestStatus.reason = err.stack;
    }

    return requestStatus;

});





// written by 
exports.save =  co.wrap(function*(student) {
    
    let requestStatus = {
        status : false
    }

    if(student === undefined || student == null || student.toString().trim() == ""){
        requestStatus.reason = "Invalid object";
        return requestStatus;
    }
    /* else if(student._id === undefined || student._id == null || student._id.toString().trim() == ""){
        requestStatus.reason = "Object id not set";
        return requestStatus;
    } */


    try {
        //console.log(student);
        let db = yield coDal.getNoSqlDB();
        
        let result = yield db.student.insert(student);

        requestStatus.status = true;

    } catch (err) {
        console.error(err.stack);
        requestStatus.reason = err.stack;
    }

    return requestStatus;

});

// written by 
exports.remove =  co.wrap(function*(id) {
    
    let requestStatus = {
        status : false
    }

    if(id === undefined || id == null || id.toString().trim() == ""){
        requestStatus.reason = "Invalid object field Value";
        return requestStatus;
    }


    try { 

        let db = yield coDal.getNoSqlDB();
        console.log("before : ID : " + id);
        let result = yield db.student.remove({"_id" : new mongodb.ObjectID(id)});
        console.log("after : ID : " + id);
        requestStatus.status = true;

    } catch (err) {
        console.error(err.stack);
        requestStatus.reason = err.stack;
    }

    return requestStatus;

});


// written by         
exports.udpate =  co.wrap(function*(student) {
    
    let requestStatus = {
        status : false
    }

    if(student === undefined || student == null || student.toString().trim() == ""){
        requestStatus.reason = "Invalid object";
        return requestStatus;
    }
    else if(student._id === undefined || student._id == null || student._id.toString().trim() == ""){
        requestStatus.reason = "_id not set";
        return requestStatus;
    }


    try {

        let db = yield coDal.getNoSqlDB();
        
        console.log("Object : " + JSON.stringify(student));

        let result = yield db.student.update(
            {"_id":new mongodb.ObjectID(student._id)},
            {
                $set:{
                    "firstName" : student.firstName,
                    "lastName": student.lastName,
                    "testCount": student.testCount
                } 
            }

        );

        requestStatus.status = true;

    } catch (err) {
        console.error(err.stack);
        requestStatus.reason = err.stack;
    }

    return requestStatus;

});