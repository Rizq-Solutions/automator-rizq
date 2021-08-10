'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Transaction_Item object constructor
var Transaction_Item = function(req,transaction_item){
    
this.transaction_item_id = 0;
this.transaction_id = transaction_item.transaction_id;
this.item_id = transaction_item.item_id;
this.created_by = transaction_item.created_by;
this.creation_date = transaction_item.creation_date;
this.last_updated_by = transaction_item.last_updated_by;
this.last_update_date = transaction_item.last_update_date;
};
Transaction_Item.create = function (req,newTransaction_Item, result) {    
        sql.query("INSERT INTO transaction_item set ?",newTransaction_Item, function (err, res) {
                
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
Transaction_Item.getById = function (req,transaction_item_id, result) {
        sql.query("SELECT  t.* FROM transaction_item t  WHERE t.transaction_item_id= ? LIMIT 0,1", transaction_item_id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Transaction_Item.totalCount = function (req,result) {
        sql.query("SELECT count(*) TotalCount FROM transaction_item t  ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Transaction_Item.totalSearchCount = function (req,searchKey,result) {
        sql.query("SELECT count(*) TotalCount FROM transaction_item t  WHERE  t.transaction_id LIKE CONCAT('%','"+searchKey +"','%') OR t.item_id LIKE CONCAT('%','"+searchKey +"','%') OR t.created_by LIKE CONCAT('%','"+searchKey +"','%') OR t.creation_date LIKE CONCAT('%','"+searchKey +"','%') OR t.last_updated_by LIKE CONCAT('%','"+searchKey +"','%') OR t.last_update_date LIKE CONCAT('%','"+searchKey +"','%') ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Transaction_Item.getAll = function (req,offset,pageSize,result) {
        sql.query("SELECT  t.* FROM transaction_item t  LIMIT ?, ?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('transaction_item : ', res);  

                 result(null, res);
                }
            });   
};
Transaction_Item.search = function (req,searchKey,offset,pageSize,result) {

        sql.query("SELECT  t.* FROM transaction_item t  WHERE  t.transaction_id LIKE CONCAT('%','"+searchKey +"','%') OR t.item_id LIKE CONCAT('%','"+searchKey +"','%') OR t.created_by LIKE CONCAT('%','"+searchKey +"','%') OR t.creation_date LIKE CONCAT('%','"+searchKey +"','%') OR t.last_updated_by LIKE CONCAT('%','"+searchKey +"','%') OR t.last_update_date LIKE CONCAT('%','"+searchKey +"','%') LIMIT ?,?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('transaction_item : ', res);  

                 result(null, res);
                }
            });   
};
Transaction_Item.updateById = function(req,transaction_item_id, transaction_item, result){
  sql.query("UPDATE transaction_item SET transaction_id = ?,item_id = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE transaction_item_id= ?",[ transaction_item.transaction_id, transaction_item.item_id, transaction_item.created_by, transaction_item.creation_date, transaction_item.last_updated_by, transaction_item.last_update_date,transaction_item_id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Transaction_Item.remove = function(req,transaction_item_id, result){
     sql.query("DELETE FROM transaction_item Where transaction_item_id=?",[transaction_item_id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Transaction_Item;
