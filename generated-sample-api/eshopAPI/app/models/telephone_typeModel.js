'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Telephone_Type object constructor
var Telephone_Type = function(req,telephone_type){
    
this.telephone_type_id = 0;
this.telephone_type = telephone_type.telephone_type;
this.created_by = telephone_type.created_by;
this.creation_date = telephone_type.creation_date;
this.last_updated_by = telephone_type.last_updated_by;
this.last_update_date = telephone_type.last_update_date;
};
Telephone_Type.create = function (req,newTelephone_Type, result) {    
        sql.query("INSERT INTO telephone_type set ?",newTelephone_Type, function (err, res) {
                
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
Telephone_Type.getById = function (req,telephone_type_id, result) {
        sql.query("SELECT  t.* FROM telephone_type t  WHERE t.telephone_type_id= ? LIMIT 0,1", telephone_type_id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Telephone_Type.totalCount = function (req,result) {
        sql.query("SELECT count(*) TotalCount FROM telephone_type t  ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Telephone_Type.totalSearchCount = function (req,searchKey,result) {
        sql.query("SELECT count(*) TotalCount FROM telephone_type t  WHERE  t.telephone_type LIKE CONCAT('%','"+searchKey +"','%') OR t.created_by LIKE CONCAT('%','"+searchKey +"','%') OR t.creation_date LIKE CONCAT('%','"+searchKey +"','%') OR t.last_updated_by LIKE CONCAT('%','"+searchKey +"','%') OR t.last_update_date LIKE CONCAT('%','"+searchKey +"','%') ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Telephone_Type.getAll = function (req,offset,pageSize,result) {
        sql.query("SELECT  t.* FROM telephone_type t  LIMIT ?, ?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('telephone_type : ', res);  

                 result(null, res);
                }
            });   
};
Telephone_Type.search = function (req,searchKey,offset,pageSize,result) {

        sql.query("SELECT  t.* FROM telephone_type t  WHERE  t.telephone_type LIKE CONCAT('%','"+searchKey +"','%') OR t.created_by LIKE CONCAT('%','"+searchKey +"','%') OR t.creation_date LIKE CONCAT('%','"+searchKey +"','%') OR t.last_updated_by LIKE CONCAT('%','"+searchKey +"','%') OR t.last_update_date LIKE CONCAT('%','"+searchKey +"','%') LIMIT ?,?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('telephone_type : ', res);  

                 result(null, res);
                }
            });   
};
Telephone_Type.updateById = function(req,telephone_type_id, telephone_type, result){
  sql.query("UPDATE telephone_type SET telephone_type = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE telephone_type_id= ?",[ telephone_type.telephone_type, telephone_type.created_by, telephone_type.creation_date, telephone_type.last_updated_by, telephone_type.last_update_date,telephone_type_id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Telephone_Type.remove = function(req,telephone_type_id, result){
     sql.query("DELETE FROM telephone_type Where telephone_type_id=?",[telephone_type_id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Telephone_Type;
