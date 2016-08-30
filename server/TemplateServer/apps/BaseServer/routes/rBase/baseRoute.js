/**
 * Created by Rahul Sutar.
 */
'use strict'
let co = require('co');
let joi = require('joi');
let JWT   = require('jsonwebtoken');
let configHelper = require('./../../../../JOS/configHelper');

let index = require('./../../index');
let baseCollectionService = require("./../../services/sBase/baseService");


//written by Rahul Sutar
let getBaseList = {
    method: "GET", path: index+"/getBaseList", config: {
        auth: false,
        description: 'get list of base collection objects',
        notes: 'get a node based on node id',
        tags: ['node', 'get']
    },
    handler: function(request, reply) {
        co(function* () {
            try {

                var result = yield baseCollectionService.getBaseList();
                reply(result);

            }catch (e) {
                console.error(e.stack);
                reply(e);
            }
        });
    }
};



module.exports = [getBaseList];