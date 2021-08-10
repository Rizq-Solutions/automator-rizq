'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Transaction object constructor
var Transaction = function(req,transaction){
    
this.transaction_id = 0;
this.account_id = transaction.account_id;
this.transaction_type = transaction.transaction_type;
this.transaction_date = transaction.transaction_date;
this.amount = transaction.amount;
this.created_by = transaction.created_by;
this.creation_date = transaction.creation_date;
this.last_updated_by = transaction.last_updated_by;
this.last_update_date = transaction.last_update_date;
};
Transaction.create = function (req,newTransaction, result) {    
        sql.query("INSERT INTO transaction set ?",newTransaction, function (err, res) {
                
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
Transaction.getById = function (req,transaction_id, result) {
        sql.query("SELECT  t.* FROM transaction t  WHERE t.transaction_id= ? LIMIT 0,1", transaction_id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Transaction.totalCount = function (req,result) {
        sql.query("SELECT count(*) TotalCount FROM transaction t  ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Transaction.totalSearchCount = function (req,searchKey,result) {
        sql.query("SELECT count(*) TotalCount FROM transaction t  WHERE  t.account_id LIKE CONCAT('%','"+searchKey +"','%') OR t.transaction_type LIKE CONCAT('%','"+searchKey +"','%') OR t.transaction_date LIKE CONCAT('%','"+searchKey +"','%') OR t.amount LIKE CONCAT('%','"+searchKey +"','%') OR t.created_by LIKE CONCAT('%','"+searchKey +"','%') OR t.creation_date LIKE CONCAT('%','"+searchKey +"','%') OR t.last_updated_by LIKE CONCAT('%','"+searchKey +"','%') OR t.last_update_date LIKE CONCAT('%','"+searchKey +"','%') ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Transaction.getAll = function (req,offset,pageSize,result) {
        sql.query("SELECT  t.* FROM transaction t  LIMIT ?, ?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('transaction : ', res);  

                 result(null, res);
                }
            });   
};
Transaction.search = function (req,searchKey,offset,pageSize,result) {

        sql.query("SELECT  t.* FROM transaction t  WHERE  t.account_id LIKE CONCAT('%','"+searchKey +"','%') OR t.transaction_type LIKE CONCAT('%','"+searchKey +"','%') OR t.transaction_date LIKE CONCAT('%','"+searchKey +"','%') OR t.amount LIKE CONCAT('%','"+searchKey +"','%') OR t.created_by LIKE CONCAT('%','"+searchKey +"','%') OR t.creation_date LIKE CONCAT('%','"+searchKey +"','%') OR t.last_updated_by LIKE CONCAT('%','"+searchKey +"','%') OR t.last_update_date LIKE CONCAT('%','"+searchKey +"','%') LIMIT ?,?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('transaction : ', res);  

                 result(null, res);
                }
            });   
};
Transaction.updateById = function(req,transaction_id, transaction, result){
  sql.query("UPDATE transaction SET account_id = ?,transaction_type = ?,transaction_date = ?,amount = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE transaction_id= ?",[ transaction.account_id, transaction.transaction_type, transaction.transaction_date, transaction.amount, transaction.created_by, transaction.creation_date, transaction.last_updated_by, transaction.last_update_date,transaction_id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Transaction.remove = function(req,transaction_id, result){
     sql.query("DELETE FROM transaction Where transaction_id=?",[transaction_id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Transaction;
