'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Postal_Code object constructor
var Postal_Code = function(req,postal_code){
    
this.postal_code_id = 0;
this.postal_code = postal_code.postal_code;
this.created_by = postal_code.created_by;
this.creation_date = postal_code.creation_date;
this.last_updated_by = postal_code.last_updated_by;
this.last_update_date = postal_code.last_update_date;
};
Postal_Code.create = function (req,newPostal_Code, result) {    
        sql.query("INSERT INTO postal_code set ?",newPostal_Code, function (err, res) {
                
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
Postal_Code.getById = function (req,postal_code_id, result) {
        sql.query("SELECT  t.* FROM postal_code t  WHERE t.postal_code_id= ? LIMIT 0,1", postal_code_id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Postal_Code.totalCount = function (req,result) {
        sql.query("SELECT count(*) TotalCount FROM postal_code t  ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Postal_Code.totalSearchCount = function (req,searchKey,result) {
        sql.query("SELECT count(*) TotalCount FROM postal_code t  WHERE  t.postal_code LIKE CONCAT('%','"+searchKey +"','%') OR t.created_by LIKE CONCAT('%','"+searchKey +"','%') OR t.creation_date LIKE CONCAT('%','"+searchKey +"','%') OR t.last_updated_by LIKE CONCAT('%','"+searchKey +"','%') OR t.last_update_date LIKE CONCAT('%','"+searchKey +"','%') ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Postal_Code.getAll = function (req,offset,pageSize,result) {
        sql.query("SELECT  t.* FROM postal_code t  LIMIT ?, ?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('postal_code : ', res);  

                 result(null, res);
                }
            });   
};
Postal_Code.search = function (req,searchKey,offset,pageSize,result) {

        sql.query("SELECT  t.* FROM postal_code t  WHERE  t.postal_code LIKE CONCAT('%','"+searchKey +"','%') OR t.created_by LIKE CONCAT('%','"+searchKey +"','%') OR t.creation_date LIKE CONCAT('%','"+searchKey +"','%') OR t.last_updated_by LIKE CONCAT('%','"+searchKey +"','%') OR t.last_update_date LIKE CONCAT('%','"+searchKey +"','%') LIMIT ?,?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('postal_code : ', res);  

                 result(null, res);
                }
            });   
};
Postal_Code.updateById = function(req,postal_code_id, postal_code, result){
  sql.query("UPDATE postal_code SET postal_code = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE postal_code_id= ?",[ postal_code.postal_code, postal_code.created_by, postal_code.creation_date, postal_code.last_updated_by, postal_code.last_update_date,postal_code_id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Postal_Code.remove = function(req,postal_code_id, result){
     sql.query("DELETE FROM postal_code Where postal_code_id=?",[postal_code_id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Postal_Code;
