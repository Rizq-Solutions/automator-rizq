'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Price_Type object constructor
var Price_Type = function(req,price_type){
    
this.price_type_id = 0;
this.price_type = price_type.price_type;
this.created_by = price_type.created_by;
this.creation_date = price_type.creation_date;
this.last_updated_by = price_type.last_updated_by;
this.last_update_date = price_type.last_update_date;
};
Price_Type.create = function (req,newPrice_Type, result) {    
        sql.query("INSERT INTO price_type set ?",newPrice_Type, function (err, res) {
                
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
Price_Type.getById = function (req,price_type_id, result) {
        sql.query("SELECT  t.* FROM price_type t  WHERE t.price_type_id= ? LIMIT 0,1", price_type_id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Price_Type.totalCount = function (req,result) {
        sql.query("SELECT count(*) TotalCount FROM price_type t  ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Price_Type.totalSearchCount = function (req,searchKey,result) {
        sql.query("SELECT count(*) TotalCount FROM price_type t  WHERE  t.price_type LIKE CONCAT('%','"+searchKey +"','%') OR t.created_by LIKE CONCAT('%','"+searchKey +"','%') OR t.creation_date LIKE CONCAT('%','"+searchKey +"','%') OR t.last_updated_by LIKE CONCAT('%','"+searchKey +"','%') OR t.last_update_date LIKE CONCAT('%','"+searchKey +"','%') ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Price_Type.getAll = function (req,offset,pageSize,result) {
        sql.query("SELECT  t.* FROM price_type t  LIMIT ?, ?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('price_type : ', res);  

                 result(null, res);
                }
            });   
};
Price_Type.search = function (req,searchKey,offset,pageSize,result) {

        sql.query("SELECT  t.* FROM price_type t  WHERE  t.price_type LIKE CONCAT('%','"+searchKey +"','%') OR t.created_by LIKE CONCAT('%','"+searchKey +"','%') OR t.creation_date LIKE CONCAT('%','"+searchKey +"','%') OR t.last_updated_by LIKE CONCAT('%','"+searchKey +"','%') OR t.last_update_date LIKE CONCAT('%','"+searchKey +"','%') LIMIT ?,?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('price_type : ', res);  

                 result(null, res);
                }
            });   
};
Price_Type.updateById = function(req,price_type_id, price_type, result){
  sql.query("UPDATE price_type SET price_type = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE price_type_id= ?",[ price_type.price_type, price_type.created_by, price_type.creation_date, price_type.last_updated_by, price_type.last_update_date,price_type_id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Price_Type.remove = function(req,price_type_id, result){
     sql.query("DELETE FROM price_type Where price_type_id=?",[price_type_id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Price_Type;
