'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Usage_Log object constructor

var Usage_Log = function(req,usage_log){
    
this.id = 0;
this.transaction_id = usage_log.transaction_id;
this.service_id = usage_log.service_id;
this.package_id = usage_log.package_id;
this.user_id = usage_log.user_id;
this.pricing = usage_log.pricing;
this.balance_before = usage_log.balance_before;
this.balance_after = usage_log.balance_after;
this.request_time = usage_log.request_time;
this.request_ip = usage_log.request_ip;
this.request_country = usage_log.request_country;
this.request_state = usage_log.request_state;
this.status = usage_log.status;
this.created_at = usage_log.created_at;
this.updated_at = usage_log.updated_at;
};
Usage_Log.create = function (req,newUsage_Log, result) {    
        sql.query("INSERT INTO usage_log set ?",newUsage_Log, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};
Usage_Log.getById = function (req,id, result) {
        sql.query("SELECT  t.* FROM usage_log t  WHERE t.id= ? LIMIT 0,1", id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else if(res && res.length>0){
                    result(null, res);
              
                }else{
                    result("Record Not Found", null);
                }
            });   
};
Usage_Log.totalCount = function (req,result) {
        sql.query("SELECT count(*) TotalCount FROM usage_log t  ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Usage_Log.totalSearchCount = function (req,searchKey,result) {
        sql.query("SELECT count(*) TotalCount FROM usage_log t  WHERE  LOWER(t.transaction_id) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.service_id) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.package_id) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.user_id) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.pricing) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.balance_before) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.balance_after) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.request_time) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.request_ip) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.request_country) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.request_state) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.status) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.created_at) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.updated_at) LIKE CONCAT('%','"+searchKey+"','%') ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Usage_Log.getAll = function (req,offset,pageSize,result) {
        sql.query("SELECT  t.* FROM usage_log t  LIMIT ?, ?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('usage_log : ', res);  

                 result(null, res);
                }
            });   
};
Usage_Log.search = function (req,searchKey,offset,pageSize,result) {

        sql.query("SELECT  t.* FROM usage_log t  WHERE  LOWER(t.transaction_id) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.service_id) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.package_id) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.user_id) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.pricing) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.balance_before) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.balance_after) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.request_time) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.request_ip) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.request_country) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.request_state) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.status) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.created_at) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.updated_at) LIKE CONCAT('%','"+searchKey+"','%') LIMIT ?,?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('usage_log : ', res);  

                 result(null, res);
                }
            });   
};
Usage_Log.updateById = function(req,id, usage_log, result){
  sql.query("UPDATE usage_log SET transaction_id = ?,service_id = ?,package_id = ?,user_id = ?,pricing = ?,balance_before = ?,balance_after = ?,request_time = ?,request_ip = ?,request_country = ?,request_state = ?,status = ?,created_at = ?,updated_at = ? WHERE id= ?",[ usage_log.transaction_id, usage_log.service_id, usage_log.package_id, usage_log.user_id, usage_log.pricing, usage_log.balance_before, usage_log.balance_after, usage_log.request_time, usage_log.request_ip, usage_log.request_country, usage_log.request_state, usage_log.status, usage_log.created_at, usage_log.updated_at,id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Usage_Log.remove = function(req,id, result){
     sql.query("DELETE FROM usage_log Where id=?",[id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Usage_Log;
