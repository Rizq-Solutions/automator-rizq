'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Topup_Record object constructor

var Topup_Record = function(req,topup_record){
    
this.id = 0;
this.user_id = topup_record.user_id;
this.package_id = topup_record.package_id;
this.topup_balance = topup_record.topup_balance;
this.balance_before = topup_record.balance_before;
this.balance_after = topup_record.balance_after;
this.topup_id = topup_record.topup_id;
this.created_at = topup_record.created_at;
this.updated_at = topup_record.updated_at;
};
Topup_Record.create = function (req,newTopup_Record, result) {    
        sql.query("INSERT INTO topup_record set ?",newTopup_Record, function (err, res) {
                
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
Topup_Record.getById = function (req,id, result) {
        sql.query("SELECT  t.* FROM topup_record t  WHERE t.id= ? LIMIT 0,1", id, function (err, res) {             
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
Topup_Record.totalCount = function (req,result) {
        sql.query("SELECT count(*) TotalCount FROM topup_record t  ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Topup_Record.totalSearchCount = function (req,searchKey,result) {
        sql.query("SELECT count(*) TotalCount FROM topup_record t  WHERE  LOWER(t.user_id) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.package_id) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.topup_balance) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.balance_before) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.balance_after) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.topup_id) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.created_at) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.updated_at) LIKE CONCAT('%','"+searchKey+"','%') ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Topup_Record.getAll = function (req,offset,pageSize,result) {
        sql.query("SELECT  t.* FROM topup_record t  LIMIT ?, ?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('topup_record : ', res);  

                 result(null, res);
                }
            });   
};
Topup_Record.search = function (req,searchKey,offset,pageSize,result) {

        sql.query("SELECT  t.* FROM topup_record t  WHERE  LOWER(t.user_id) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.package_id) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.topup_balance) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.balance_before) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.balance_after) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.topup_id) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.created_at) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.updated_at) LIKE CONCAT('%','"+searchKey+"','%') LIMIT ?,?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('topup_record : ', res);  

                 result(null, res);
                }
            });   
};
Topup_Record.updateById = function(req,id, topup_record, result){
  sql.query("UPDATE topup_record SET user_id = ?,package_id = ?,topup_balance = ?,balance_before = ?,balance_after = ?,topup_id = ?,created_at = ?,updated_at = ? WHERE id= ?",[ topup_record.user_id, topup_record.package_id, topup_record.topup_balance, topup_record.balance_before, topup_record.balance_after, topup_record.topup_id, topup_record.created_at, topup_record.updated_at,id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Topup_Record.remove = function(req,id, result){
     sql.query("DELETE FROM topup_record Where id=?",[id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Topup_Record;
