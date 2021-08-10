'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Account object constructor
var Account = function(req,account){
    
this.account_id = 0;
this.account_type = account.account_type;
this.account_number = account.account_number;
this.password = account.password;
this.created_by = account.created_by;
this.creation_date = account.creation_date;
this.last_updated_by = account.last_updated_by;
this.last_update_date = account.last_update_date;
};
Account.create = function (req,newAccount, result) {    
        sql.query("INSERT INTO account set ?",newAccount, function (err, res) {
                
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
Account.getById = function (req,account_id, result) {
        sql.query("SELECT  t.* FROM account t  WHERE t.account_id= ? LIMIT 0,1", account_id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Account.totalCount = function (req,result) {
        sql.query("SELECT count(*) TotalCount FROM account t  ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Account.totalSearchCount = function (req,searchKey,result) {
        sql.query("SELECT count(*) TotalCount FROM account t  WHERE  t.account_type LIKE CONCAT('%','"+searchKey +"','%') OR t.account_number LIKE CONCAT('%','"+searchKey +"','%') OR t.password LIKE CONCAT('%','"+searchKey +"','%') OR t.created_by LIKE CONCAT('%','"+searchKey +"','%') OR t.creation_date LIKE CONCAT('%','"+searchKey +"','%') OR t.last_updated_by LIKE CONCAT('%','"+searchKey +"','%') OR t.last_update_date LIKE CONCAT('%','"+searchKey +"','%') ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Account.getAll = function (req,offset,pageSize,result) {
        sql.query("SELECT  t.* FROM account t  LIMIT ?, ?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('account : ', res);  

                 result(null, res);
                }
            });   
};
Account.search = function (req,searchKey,offset,pageSize,result) {

        sql.query("SELECT  t.* FROM account t  WHERE  t.account_type LIKE CONCAT('%','"+searchKey +"','%') OR t.account_number LIKE CONCAT('%','"+searchKey +"','%') OR t.password LIKE CONCAT('%','"+searchKey +"','%') OR t.created_by LIKE CONCAT('%','"+searchKey +"','%') OR t.creation_date LIKE CONCAT('%','"+searchKey +"','%') OR t.last_updated_by LIKE CONCAT('%','"+searchKey +"','%') OR t.last_update_date LIKE CONCAT('%','"+searchKey +"','%') LIMIT ?,?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('account : ', res);  

                 result(null, res);
                }
            });   
};
Account.updateById = function(req,account_id, account, result){
  sql.query("UPDATE account SET account_type = ?,account_number = ?,password = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE account_id= ?",[ account.account_type, account.account_number, account.password, account.created_by, account.creation_date, account.last_updated_by, account.last_update_date,account_id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Account.remove = function(req,account_id, result){
     sql.query("DELETE FROM account Where account_id=?",[account_id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Account;
