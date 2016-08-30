/**
 * Created by sandeepss on 1/16/2016.
 */



var co = require('co');
exports.registerSchemas = co.wrap(function* (db) {
    //register your schemas 
    db.baseCollection = yield db.collection('baseCollection');
    db.student = yield db.collection('student');

    return db;
});