'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//System_User_Type object constructor
var System_User_Type = function(req,system_user_type){
    
this.system_user_type_id = 0;
this.system_user_type = system_user_type.system_user_type;
this.created_by = system_user_type.created_by;
this.creation_date = system_user_type.creation_date;
this.last_updated_by = system_user_type.last_updated_by;
this.last_update_date = system_user_type.last_update_date;
};
System_User_Type.create = function (req,newSystem_User_Type, result) {    
        sql.query("INSERT INTO system_user_type set ?",newSystem_User_Type, function (err, res) {
                
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
System_User_Type.getById = function (req,system_user_type_id, result) {
        sql.query("SELECT  t.* FROM system_user_type t  WHERE t.system_user_type_id= ? LIMIT 0,1", system_user_type_id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
System_User_Type.totalCount = function (req,result) {
        sql.query("SELECT count(*) TotalCount FROM system_user_type t  ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

System_User_Type.totalSearchCount = function (req,searchKey,result) {
        sql.query("SELECT count(*) TotalCount FROM system_user_type t  WHERE  t.system_user_type LIKE CONCAT('%','"+searchKey +"','%') OR t.created_by LIKE CONCAT('%','"+searchKey +"','%') OR t.creation_date LIKE CONCAT('%','"+searchKey +"','%') OR t.last_updated_by LIKE CONCAT('%','"+searchKey +"','%') OR t.last_update_date LIKE CONCAT('%','"+searchKey +"','%') ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

System_User_Type.getAll = function (req,offset,pageSize,result) {
        sql.query("SELECT  t.* FROM system_user_type t  LIMIT ?, ?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('system_user_type : ', res);  

                 result(null, res);
                }
            });   
};
System_User_Type.search = function (req,searchKey,offset,pageSize,result) {

        sql.query("SELECT  t.* FROM system_user_type t  WHERE  t.system_user_type LIKE CONCAT('%','"+searchKey +"','%') OR t.created_by LIKE CONCAT('%','"+searchKey +"','%') OR t.creation_date LIKE CONCAT('%','"+searchKey +"','%') OR t.last_updated_by LIKE CONCAT('%','"+searchKey +"','%') OR t.last_update_date LIKE CONCAT('%','"+searchKey +"','%') LIMIT ?,?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('system_user_type : ', res);  

                 result(null, res);
                }
            });   
};
System_User_Type.updateById = function(req,system_user_type_id, system_user_type, result){
  sql.query("UPDATE system_user_type SET system_user_type = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE system_user_type_id= ?",[ system_user_type.system_user_type, system_user_type.created_by, system_user_type.creation_date, system_user_type.last_updated_by, system_user_type.last_update_date,system_user_type_id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
System_User_Type.remove = function(req,system_user_type_id, result){
     sql.query("DELETE FROM system_user_type Where system_user_type_id=?",[system_user_type_id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= System_User_Type;
