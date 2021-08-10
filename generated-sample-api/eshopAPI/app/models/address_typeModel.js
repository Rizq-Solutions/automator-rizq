'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Address_Type object constructor
var Address_Type = function(req,address_type){
    
this.address_type_id = 0;
this.address_type = address_type.address_type;
this.created_by = address_type.created_by;
this.creation_date = address_type.creation_date;
this.last_updated_by = address_type.last_updated_by;
this.last_update_date = address_type.last_update_date;
};
Address_Type.create = function (req,newAddress_Type, result) {    
        sql.query("INSERT INTO address_type set ?",newAddress_Type, function (err, res) {
                
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
Address_Type.getById = function (req,address_type_id, result) {
        sql.query("SELECT  t.* FROM address_type t  WHERE t.address_type_id= ? LIMIT 0,1", address_type_id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Address_Type.totalCount = function (req,result) {
        sql.query("SELECT count(*) TotalCount FROM address_type t  ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Address_Type.totalSearchCount = function (req,searchKey,result) {
        sql.query("SELECT count(*) TotalCount FROM address_type t  WHERE  t.address_type LIKE CONCAT('%','"+searchKey +"','%') OR t.created_by LIKE CONCAT('%','"+searchKey +"','%') OR t.creation_date LIKE CONCAT('%','"+searchKey +"','%') OR t.last_updated_by LIKE CONCAT('%','"+searchKey +"','%') OR t.last_update_date LIKE CONCAT('%','"+searchKey +"','%') ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Address_Type.getAll = function (req,offset,pageSize,result) {
        sql.query("SELECT  t.* FROM address_type t  LIMIT ?, ?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('address_type : ', res);  

                 result(null, res);
                }
            });   
};
Address_Type.search = function (req,searchKey,offset,pageSize,result) {

        sql.query("SELECT  t.* FROM address_type t  WHERE  t.address_type LIKE CONCAT('%','"+searchKey +"','%') OR t.created_by LIKE CONCAT('%','"+searchKey +"','%') OR t.creation_date LIKE CONCAT('%','"+searchKey +"','%') OR t.last_updated_by LIKE CONCAT('%','"+searchKey +"','%') OR t.last_update_date LIKE CONCAT('%','"+searchKey +"','%') LIMIT ?,?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('address_type : ', res);  

                 result(null, res);
                }
            });   
};
Address_Type.updateById = function(req,address_type_id, address_type, result){
  sql.query("UPDATE address_type SET address_type = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE address_type_id= ?",[ address_type.address_type, address_type.created_by, address_type.creation_date, address_type.last_updated_by, address_type.last_update_date,address_type_id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Address_Type.remove = function(req,address_type_id, result){
     sql.query("DELETE FROM address_type Where address_type_id=?",[address_type_id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Address_Type;
