'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Credit_Card object constructor
var Credit_Card = function(req,credit_card){
    
this.credit_card_id = 0;
this.account_id = credit_card.account_id;
this.credit_card_number = credit_card.credit_card_number;
this.credit_card_type = credit_card.credit_card_type;
this.expiration_date = credit_card.expiration_date;
this.cvv = credit_card.cvv;
this.created_by = credit_card.created_by;
this.creation_date = credit_card.creation_date;
this.last_updated_by = credit_card.last_updated_by;
this.last_update_date = credit_card.last_update_date;
};
Credit_Card.create = function (req,newCredit_Card, result) {    
        sql.query("INSERT INTO credit_card set ?",newCredit_Card, function (err, res) {
                
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
Credit_Card.getById = function (req,credit_card_id, result) {
        sql.query("SELECT  t.* FROM credit_card t  WHERE t.credit_card_id= ? LIMIT 0,1", credit_card_id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Credit_Card.totalCount = function (req,result) {
        sql.query("SELECT count(*) TotalCount FROM credit_card t  ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Credit_Card.totalSearchCount = function (req,searchKey,result) {
        sql.query("SELECT count(*) TotalCount FROM credit_card t  WHERE  t.account_id LIKE CONCAT('%','"+searchKey +"','%') OR t.credit_card_number LIKE CONCAT('%','"+searchKey +"','%') OR t.credit_card_type LIKE CONCAT('%','"+searchKey +"','%') OR t.expiration_date LIKE CONCAT('%','"+searchKey +"','%') OR t.cvv LIKE CONCAT('%','"+searchKey +"','%') OR t.created_by LIKE CONCAT('%','"+searchKey +"','%') OR t.creation_date LIKE CONCAT('%','"+searchKey +"','%') OR t.last_updated_by LIKE CONCAT('%','"+searchKey +"','%') OR t.last_update_date LIKE CONCAT('%','"+searchKey +"','%') ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Credit_Card.getAll = function (req,offset,pageSize,result) {
        sql.query("SELECT  t.* FROM credit_card t  LIMIT ?, ?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('credit_card : ', res);  

                 result(null, res);
                }
            });   
};
Credit_Card.search = function (req,searchKey,offset,pageSize,result) {

        sql.query("SELECT  t.* FROM credit_card t  WHERE  t.account_id LIKE CONCAT('%','"+searchKey +"','%') OR t.credit_card_number LIKE CONCAT('%','"+searchKey +"','%') OR t.credit_card_type LIKE CONCAT('%','"+searchKey +"','%') OR t.expiration_date LIKE CONCAT('%','"+searchKey +"','%') OR t.cvv LIKE CONCAT('%','"+searchKey +"','%') OR t.created_by LIKE CONCAT('%','"+searchKey +"','%') OR t.creation_date LIKE CONCAT('%','"+searchKey +"','%') OR t.last_updated_by LIKE CONCAT('%','"+searchKey +"','%') OR t.last_update_date LIKE CONCAT('%','"+searchKey +"','%') LIMIT ?,?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('credit_card : ', res);  

                 result(null, res);
                }
            });   
};
Credit_Card.updateById = function(req,credit_card_id, credit_card, result){
  sql.query("UPDATE credit_card SET account_id = ?,credit_card_number = ?,credit_card_type = ?,expiration_date = ?,cvv = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE credit_card_id= ?",[ credit_card.account_id, credit_card.credit_card_number, credit_card.credit_card_type, credit_card.expiration_date, credit_card.cvv, credit_card.created_by, credit_card.creation_date, credit_card.last_updated_by, credit_card.last_update_date,credit_card_id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Credit_Card.remove = function(req,credit_card_id, result){
     sql.query("DELETE FROM credit_card Where credit_card_id=?",[credit_card_id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Credit_Card;
