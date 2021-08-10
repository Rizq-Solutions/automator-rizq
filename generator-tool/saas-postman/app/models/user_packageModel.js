'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//User_Package object constructor

var User_Package = function(req,user_package){
    
this.id = 0;
this.user_id = user_package.user_id;
this.package_id = user_package.package_id;
this.available_balance = user_package.available_balance;
this.start_date = user_package.start_date;
this.end_date = user_package.end_date;
this.status = user_package.status;
this.updated_by = user_package.updated_by;
this.created_by = user_package.created_by;
this.updated_at = user_package.updated_at;
this.created_at = user_package.created_at;
};
User_Package.create = function (req,newUser_Package, result) {    
        sql.query("INSERT INTO user_package set ?",newUser_Package, function (err, res) {
                
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
User_Package.getById = function (req,id, result) {
        sql.query("SELECT  t.* FROM user_package t  WHERE t.id= ? LIMIT 0,1", id, function (err, res) {             
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
User_Package.totalCount = function (req,result) {
        sql.query("SELECT count(*) TotalCount FROM user_package t  ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

User_Package.totalSearchCount = function (req,searchKey,result) {
        sql.query("SELECT count(*) TotalCount FROM user_package t  WHERE  LOWER(t.user_id) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.package_id) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.available_balance) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.start_date) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.end_date) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.status) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.updated_by) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.created_by) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.updated_at) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.created_at) LIKE CONCAT('%','"+searchKey+"','%') ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

User_Package.getAll = function (req,offset,pageSize,result) {
        sql.query("SELECT  t.* FROM user_package t  LIMIT ?, ?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('user_package : ', res);  

                 result(null, res);
                }
            });   
};
User_Package.search = function (req,searchKey,offset,pageSize,result) {

        sql.query("SELECT  t.* FROM user_package t  WHERE  LOWER(t.user_id) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.package_id) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.available_balance) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.start_date) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.end_date) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.status) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.updated_by) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.created_by) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.updated_at) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.created_at) LIKE CONCAT('%','"+searchKey+"','%') LIMIT ?,?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('user_package : ', res);  

                 result(null, res);
                }
            });   
};
User_Package.updateById = function(req,id, user_package, result){
  sql.query("UPDATE user_package SET user_id = ?,package_id = ?,available_balance = ?,start_date = ?,end_date = ?,status = ?,updated_by = ?,created_by = ?,updated_at = ?,created_at = ? WHERE id= ?",[ user_package.user_id, user_package.package_id, user_package.available_balance, user_package.start_date, user_package.end_date, user_package.status, user_package.updated_by, user_package.created_by, user_package.updated_at, user_package.created_at,id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
User_Package.remove = function(req,id, result){
     sql.query("DELETE FROM user_package Where id=?",[id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= User_Package;
