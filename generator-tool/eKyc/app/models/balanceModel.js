'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Balance object constructor

var Balance = function(req,balance){
    
this.id = 0;
this.user_id = balance.user_id;
this.total_balance = balance.total_balance;
this.used_balance = balance.used_balance;
this.current_balance = balance.current_balance;
this.last_balance = balance.last_balance;
this.pending_balance = balance.pending_balance;
this.last_pending_balance = balance.last_pending_balance;
this.exceed_balance = balance.exceed_balance;
this.balance_after_topup = balance.balance_after_topup;
this.last_topup_balance = balance.last_topup_balance;
this.last_topup_at = new Date();
this.version = balance.version;
this.updated_at = balance.updated_at;
this.created_at = balance.created_at;
};
Balance.create = function (req,newBalance, result) {    
        sql.query("INSERT INTO balance set ?",newBalance, function (err, res) {
                
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
Balance.getById = function (req,id, result) {
        sql.query("SELECT  t.* FROM balance t  WHERE t.id= ? LIMIT 0,1", id, function (err, res) {             
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
Balance.totalCount = function (req,result) {
        sql.query("SELECT count(*) TotalCount FROM balance t  ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Balance.totalSearchCount = function (req,searchKey,result) {
        sql.query("SELECT count(*) TotalCount FROM balance t  WHERE  LOWER(t.user_id) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.total_balance) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.used_balance) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.current_balance) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.last_balance) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.pending_balance) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.last_pending_balance) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.exceed_balance) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.balance_after_topup) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.last_topup_balance) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.last_topup_at) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.version) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.updated_at) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.created_at) LIKE CONCAT('%','"+searchKey+"','%') ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Balance.getAll = function (req,offset,pageSize,result) {
        sql.query("SELECT  t.* FROM balance t  LIMIT ?, ?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('balance : ', res);  

                 result(null, res);
                }
            });   
};
Balance.search = function (req,searchKey,offset,pageSize,result) {

        sql.query("SELECT  t.* FROM balance t  WHERE  LOWER(t.user_id) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.total_balance) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.used_balance) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.current_balance) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.last_balance) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.pending_balance) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.last_pending_balance) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.exceed_balance) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.balance_after_topup) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.last_topup_balance) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.last_topup_at) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.version) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.updated_at) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.created_at) LIKE CONCAT('%','"+searchKey+"','%') LIMIT ?,?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('balance : ', res);  

                 result(null, res);
                }
            });   
};
Balance.updateById = function(req,id, balance, result){
  sql.query("UPDATE balance SET user_id = ?,total_balance = ?,used_balance = ?,current_balance = ?,last_balance = ?,pending_balance = ?,last_pending_balance = ?,exceed_balance = ?,balance_after_topup = ?,last_topup_balance = ?,version = ?,updated_at = ?,created_at = ? WHERE id= ?",[ balance.user_id, balance.total_balance, balance.used_balance, balance.current_balance, balance.last_balance, balance.pending_balance, balance.last_pending_balance, balance.exceed_balance, balance.balance_after_topup, balance.last_topup_balance, balance.version, balance.updated_at, balance.created_at,id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Balance.remove = function(req,id, result){
     sql.query("DELETE FROM balance Where id=?",[id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Balance;
