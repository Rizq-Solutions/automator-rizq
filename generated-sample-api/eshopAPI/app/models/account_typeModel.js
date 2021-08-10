'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Account_Type object constructor
var Account_Type = function(req,account_type){
    
this.account_type_id = 0;
this.account_type = account_type.account_type;
this.created_by = account_type.created_by;
this.creation_date = account_type.creation_date;
this.last_updated_by = account_type.last_updated_by;
this.last_update_date = account_type.last_update_date;
};
Account_Type.create = function (req,newAccount_Type, result) {    
        sql.query("INSERT INTO account_type set ?",newAccount_Type, function (err, res) {
                
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
Account_Type.getById = function (req,account_type_id, result) {
        sql.query("SELECT  t.* FROM account_type t  WHERE t.account_type_id= ? LIMIT 0,1", account_type_id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Account_Type.totalCount = function (req,result) {
        sql.query("SELECT count(*) TotalCount FROM account_type t  ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Account_Type.totalSearchCount = function (req,searchKey,result) {
        sql.query("SELECT count(*) TotalCount FROM account_type t  WHERE  t.account_type LIKE CONCAT('%','"+searchKey +"','%') OR t.created_by LIKE CONCAT('%','"+searchKey +"','%') OR t.creation_date LIKE CONCAT('%','"+searchKey +"','%') OR t.last_updated_by LIKE CONCAT('%','"+searchKey +"','%') OR t.last_update_date LIKE CONCAT('%','"+searchKey +"','%') ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Account_Type.getAll = function (req,offset,pageSize,result) {
        sql.query("SELECT  t.* FROM account_type t  LIMIT ?, ?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('account_type : ', res);  

                 result(null, res);
                }
            });   
};
Account_Type.search = function (req,searchKey,offset,pageSize,result) {

        sql.query("SELECT  t.* FROM account_type t  WHERE  t.account_type LIKE CONCAT('%','"+searchKey +"','%') OR t.created_by LIKE CONCAT('%','"+searchKey +"','%') OR t.creation_date LIKE CONCAT('%','"+searchKey +"','%') OR t.last_updated_by LIKE CONCAT('%','"+searchKey +"','%') OR t.last_update_date LIKE CONCAT('%','"+searchKey +"','%') LIMIT ?,?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('account_type : ', res);  

                 result(null, res);
                }
            });   
};
Account_Type.updateById = function(req,account_type_id, account_type, result){
  sql.query("UPDATE account_type SET account_type = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE account_type_id= ?",[ account_type.account_type, account_type.created_by, account_type.creation_date, account_type.last_updated_by, account_type.last_update_date,account_type_id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Account_Type.remove = function(req,account_type_id, result){
     sql.query("DELETE FROM account_type Where account_type_id=?",[account_type_id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Account_Type;
