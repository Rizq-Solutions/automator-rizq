'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Credit_Card_Type object constructor
var Credit_Card_Type = function(req,credit_card_type){
    
this.credit_card_type_id = 0;
this.credit_card_type = credit_card_type.credit_card_type;
this.created_by = credit_card_type.created_by;
this.creation_date = credit_card_type.creation_date;
this.last_updated_by = credit_card_type.last_updated_by;
this.last_update_date = credit_card_type.last_update_date;
};
Credit_Card_Type.create = function (req,newCredit_Card_Type, result) {    
        sql.query("INSERT INTO credit_card_type set ?",newCredit_Card_Type, function (err, res) {
                
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
Credit_Card_Type.getById = function (req,credit_card_type_id, result) {
        sql.query("SELECT  t.* FROM credit_card_type t  WHERE t.credit_card_type_id= ? LIMIT 0,1", credit_card_type_id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Credit_Card_Type.totalCount = function (req,result) {
        sql.query("SELECT count(*) TotalCount FROM credit_card_type t  ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Credit_Card_Type.totalSearchCount = function (req,searchKey,result) {
        sql.query("SELECT count(*) TotalCount FROM credit_card_type t  WHERE  t.credit_card_type LIKE CONCAT('%','"+searchKey +"','%') OR t.created_by LIKE CONCAT('%','"+searchKey +"','%') OR t.creation_date LIKE CONCAT('%','"+searchKey +"','%') OR t.last_updated_by LIKE CONCAT('%','"+searchKey +"','%') OR t.last_update_date LIKE CONCAT('%','"+searchKey +"','%') ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Credit_Card_Type.getAll = function (req,offset,pageSize,result) {
        sql.query("SELECT  t.* FROM credit_card_type t  LIMIT ?, ?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('credit_card_type : ', res);  

                 result(null, res);
                }
            });   
};
Credit_Card_Type.search = function (req,searchKey,offset,pageSize,result) {

        sql.query("SELECT  t.* FROM credit_card_type t  WHERE  t.credit_card_type LIKE CONCAT('%','"+searchKey +"','%') OR t.created_by LIKE CONCAT('%','"+searchKey +"','%') OR t.creation_date LIKE CONCAT('%','"+searchKey +"','%') OR t.last_updated_by LIKE CONCAT('%','"+searchKey +"','%') OR t.last_update_date LIKE CONCAT('%','"+searchKey +"','%') LIMIT ?,?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('credit_card_type : ', res);  

                 result(null, res);
                }
            });   
};
Credit_Card_Type.updateById = function(req,credit_card_type_id, credit_card_type, result){
  sql.query("UPDATE credit_card_type SET credit_card_type = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE credit_card_type_id= ?",[ credit_card_type.credit_card_type, credit_card_type.created_by, credit_card_type.creation_date, credit_card_type.last_updated_by, credit_card_type.last_update_date,credit_card_type_id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Credit_Card_Type.remove = function(req,credit_card_type_id, result){
     sql.query("DELETE FROM credit_card_type Where credit_card_type_id=?",[credit_card_type_id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Credit_Card_Type;
