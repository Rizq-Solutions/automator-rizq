'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Contact_Type object constructor
var Contact_Type = function(req,contact_type){
    
this.contact_type_id = 0;
this.contact_type = contact_type.contact_type;
this.created_by = contact_type.created_by;
this.creation_date = contact_type.creation_date;
this.last_updated_by = contact_type.last_updated_by;
this.last_update_date = contact_type.last_update_date;
};
Contact_Type.create = function (req,newContact_Type, result) {    
        sql.query("INSERT INTO contact_type set ?",newContact_Type, function (err, res) {
                
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
Contact_Type.getById = function (req,contact_type_id, result) {
        sql.query("SELECT  t.* FROM contact_type t  WHERE t.contact_type_id= ? LIMIT 0,1", contact_type_id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Contact_Type.totalCount = function (req,result) {
        sql.query("SELECT count(*) TotalCount FROM contact_type t  ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Contact_Type.totalSearchCount = function (req,searchKey,result) {
        sql.query("SELECT count(*) TotalCount FROM contact_type t  WHERE  t.contact_type LIKE CONCAT('%','"+searchKey +"','%') OR t.created_by LIKE CONCAT('%','"+searchKey +"','%') OR t.creation_date LIKE CONCAT('%','"+searchKey +"','%') OR t.last_updated_by LIKE CONCAT('%','"+searchKey +"','%') OR t.last_update_date LIKE CONCAT('%','"+searchKey +"','%') ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Contact_Type.getAll = function (req,offset,pageSize,result) {
        sql.query("SELECT  t.* FROM contact_type t  LIMIT ?, ?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('contact_type : ', res);  

                 result(null, res);
                }
            });   
};
Contact_Type.search = function (req,searchKey,offset,pageSize,result) {

        sql.query("SELECT  t.* FROM contact_type t  WHERE  t.contact_type LIKE CONCAT('%','"+searchKey +"','%') OR t.created_by LIKE CONCAT('%','"+searchKey +"','%') OR t.creation_date LIKE CONCAT('%','"+searchKey +"','%') OR t.last_updated_by LIKE CONCAT('%','"+searchKey +"','%') OR t.last_update_date LIKE CONCAT('%','"+searchKey +"','%') LIMIT ?,?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('contact_type : ', res);  

                 result(null, res);
                }
            });   
};
Contact_Type.updateById = function(req,contact_type_id, contact_type, result){
  sql.query("UPDATE contact_type SET contact_type = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE contact_type_id= ?",[ contact_type.contact_type, contact_type.created_by, contact_type.creation_date, contact_type.last_updated_by, contact_type.last_update_date,contact_type_id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Contact_Type.remove = function(req,contact_type_id, result){
     sql.query("DELETE FROM contact_type Where contact_type_id=?",[contact_type_id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Contact_Type;
