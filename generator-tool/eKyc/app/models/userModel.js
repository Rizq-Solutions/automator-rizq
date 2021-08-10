'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//User object constructor

var User = function(req,user){
    
this.id = 0;
this.parent = user.parent;
this.username = user.username;
this.auth_key = user.auth_key;
this.password_hash = user.password_hash;
this.password_reset_token = user.password_reset_token;
this.verify_token = user.verify_token;
this.email = user.email;
this.type = user.type;
this.company = user.company;
this.full_name = user.full_name;
this.role_id = user.role_id;
this.extra_data = user.extra_data;
this.last_login_ip = user.last_login_ip;
this.last_login_at = user.last_login_at;
this.last_active_at = user.last_active_at;
this.login_status = user.login_status;
this.status = user.status;
this.login_attempt = user.login_attempt;
this.created_by = user.created_by;
this.updated_by = user.updated_by;
this.created_at = user.created_at;
this.updated_at = user.updated_at;
this.version = user.version;
};
User.create = function (req,newUser, result) {    
        sql.query("INSERT INTO user set ?",newUser, function (err, res) {
                
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
User.getById = function (req,id, result) {
        sql.query("SELECT  t.* FROM user t  WHERE t.id= ? LIMIT 0,1", id, function (err, res) {             
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
User.totalCount = function (req,result) {
        sql.query("SELECT count(*) TotalCount FROM user t  ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

User.totalSearchCount = function (req,searchKey,result) {
        sql.query("SELECT count(*) TotalCount FROM user t  WHERE  LOWER(t.parent) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.username) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.auth_key) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.password_hash) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.password_reset_token) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.verify_token) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.email) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.type) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.company) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.full_name) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.role_id) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.extra_data) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.last_login_ip) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.last_login_at) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.last_active_at) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.login_status) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.status) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.login_attempt) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.created_by) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.updated_by) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.created_at) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.updated_at) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.version) LIKE CONCAT('%','"+searchKey+"','%') ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

User.getAll = function (req,offset,pageSize,result) {
        sql.query("SELECT  t.* FROM user t  LIMIT ?, ?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('user : ', res);  

                 result(null, res);
                }
            });   
};
User.search = function (req,searchKey,offset,pageSize,result) {

        sql.query("SELECT  t.* FROM user t  WHERE  LOWER(t.parent) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.username) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.auth_key) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.password_hash) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.password_reset_token) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.verify_token) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.email) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.type) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.company) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.full_name) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.role_id) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.extra_data) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.last_login_ip) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.last_login_at) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.last_active_at) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.login_status) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.status) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.login_attempt) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.created_by) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.updated_by) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.created_at) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.updated_at) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.version) LIKE CONCAT('%','"+searchKey+"','%') LIMIT ?,?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('user : ', res);  

                 result(null, res);
                }
            });   
};
User.updateById = function(req,id, user, result){
  sql.query("UPDATE user SET parent = ?,username = ?,auth_key = ?,password_hash = ?,password_reset_token = ?,verify_token = ?,email = ?,type = ?,company = ?,full_name = ?,role_id = ?,extra_data = ?,last_login_ip = ?,last_login_at = ?,last_active_at = ?,login_status = ?,status = ?,login_attempt = ?,created_by = ?,updated_by = ?,created_at = ?,updated_at = ?,version = ? WHERE id= ?",[ user.parent, user.username, user.auth_key, user.password_hash, user.password_reset_token, user.verify_token, user.email, user.type, user.company, user.full_name, user.role_id, user.extra_data, user.last_login_ip, user.last_login_at, user.last_active_at, user.login_status, user.status, user.login_attempt, user.created_by, user.updated_by, user.created_at, user.updated_at, user.version,id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
User.remove = function(req,id, result){
     sql.query("DELETE FROM user Where id=?",[id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= User;
