'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Pricing_Type object constructor

var Pricing_Type = function(req,pricing_type){
    
this.id = 0;
this.type_name = pricing_type.type_name;
this.created_at = pricing_type.created_at;
this.updated_at = pricing_type.updated_at;
};
Pricing_Type.create = function (req,newPricing_Type, result) {    
        sql.query("INSERT INTO pricing_type set ?",newPricing_Type, function (err, res) {
                
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
Pricing_Type.getById = function (req,id, result) {
        sql.query("SELECT  t.* FROM pricing_type t  WHERE t.id= ? LIMIT 0,1", id, function (err, res) {             
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
Pricing_Type.totalCount = function (req,result) {
        sql.query("SELECT count(*) TotalCount FROM pricing_type t  ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Pricing_Type.totalSearchCount = function (req,searchKey,result) {
        sql.query("SELECT count(*) TotalCount FROM pricing_type t  WHERE  LOWER(t.type_name) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.created_at) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.updated_at) LIKE CONCAT('%','"+searchKey+"','%') ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Pricing_Type.getAll = function (req,offset,pageSize,result) {
        sql.query("SELECT  t.* FROM pricing_type t  LIMIT ?, ?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('pricing_type : ', res);  

                 result(null, res);
                }
            });   
};
Pricing_Type.search = function (req,searchKey,offset,pageSize,result) {

        sql.query("SELECT  t.* FROM pricing_type t  WHERE  LOWER(t.type_name) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.created_at) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.updated_at) LIKE CONCAT('%','"+searchKey+"','%') LIMIT ?,?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('pricing_type : ', res);  

                 result(null, res);
                }
            });   
};
Pricing_Type.updateById = function(req,id, pricing_type, result){
  sql.query("UPDATE pricing_type SET type_name = ?,created_at = ?,updated_at = ? WHERE id= ?",[ pricing_type.type_name, pricing_type.created_at, pricing_type.updated_at,id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Pricing_Type.remove = function(req,id, result){
     sql.query("DELETE FROM pricing_type Where id=?",[id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Pricing_Type;
