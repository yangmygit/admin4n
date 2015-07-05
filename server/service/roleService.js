/* 
* @Author: chenhao
* @Date:   2015-07-03 13:50:49
* @Last Modified by:   chenhao
* @Last Modified time: 2015-07-03 13:52:23
*/

'use strict';

var roleDao = require('../dao/roleDao.js');

//查询角色
exports.query = function(data, callback){
    roleDao.query(data, function(err, results){
        if(err){
            callback(true);
            return;
        }
        callback(false, results);
    });
};

//新增角色
exports.insert = function(data, callback){
    roleDao.insert(data, function(err){
        if(err){
            callback(true);
            return;
        }
        callback(false);
    });
};

//修改角色
exports.update = function(data, callback){
    roleDao.update(data, function(err){
        if(err){
            callback(true);
            return;
        }
        callback(false);
    });
};

//修改角色
exports.delete = function(data, callback){
    roleDao.delete(data, function(err){
        if(err){
            callback(true);
            return;
        }
        callback(false);
    });
};