'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Transaction_Type object constructor
var Transaction_Type = function(req,transaction_type){
    
this.transaction_type_id = 0;
this.transaction_type = transaction_type.transaction_type;
this.created_by = transaction_type.created_by;
this.creation_date = transaction_type.creation_date;
this.last_updated_by = transaction_type.last_updated_by;
this.last_update_date = transaction_type.last_update_date;
};
Transaction_Type.create = function (req,newTransaction_Type, result) {    
        sql.query("INSERT INTO transaction_type set ?",newTransaction_Type, function (err, res) {
                
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
Transaction_Type.getById = function (req,transaction_type_id, result) {
        sql.query("SELECT  t.* FROM transaction_type t  WHERE t.transaction_type_id= ? LIMIT 0,1", transaction_type_id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Transaction_Type.totalCount = function (req,result) {
        sql.query("SELECT count(*) TotalCount FROM transaction_type t  ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Transaction_Type.totalSearchCount = function (req,searchKey,result) {
        sql.query("SELECT count(*) TotalCount FROM transaction_type t  WHERE  t.transaction_type LIKE CONCAT('%','"+searchKey +"','%') OR t.created_by LIKE CONCAT('%','"+searchKey +"','%') OR t.creation_date LIKE CONCAT('%','"+searchKey +"','%') OR t.last_updated_by LIKE CONCAT('%','"+searchKey +"','%') OR t.last_update_date LIKE CONCAT('%','"+searchKey +"','%') ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Transaction_Type.getAll = function (req,offset,pageSize,result) {
        sql.query("SELECT  t.* FROM transaction_type t  LIMIT ?, ?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('transaction_type : ', res);  

                 result(null, res);
                }
            });   
};
Transaction_Type.search = function (req,searchKey,offset,pageSize,result) {

        sql.query("SELECT  t.* FROM transaction_type t  WHERE  t.transaction_type LIKE CONCAT('%','"+searchKey +"','%') OR t.created_by LIKE CONCAT('%','"+searchKey +"','%') OR t.creation_date LIKE CONCAT('%','"+searchKey +"','%') OR t.last_updated_by LIKE CONCAT('%','"+searchKey +"','%') OR t.last_update_date LIKE CONCAT('%','"+searchKey +"','%') LIMIT ?,?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('transaction_type : ', res);  

                 result(null, res);
                }
            });   
};
Transaction_Type.updateById = function(req,transaction_type_id, transaction_type, result){
  sql.query("UPDATE transaction_type SET transaction_type = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE transaction_type_id= ?",[ transaction_type.transaction_type, transaction_type.created_by, transaction_type.creation_date, transaction_type.last_updated_by, transaction_type.last_update_date,transaction_type_id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Transaction_Type.remove = function(req,transaction_type_id, result){
     sql.query("DELETE FROM transaction_type Where transaction_type_id=?",[transaction_type_id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Transaction_Type;
