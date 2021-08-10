'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//User_Role object constructor

var User_Role = function(req,user_role){
    
this.id = 0;
this.role = user_role.role;
this.description = user_role.description;
this.created_at = user_role.created_at;
};
User_Role.create = function (req,newUser_Role, result) {    
        sql.query("INSERT INTO user_role set ?",newUser_Role, function (err, res) {
                
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
User_Role.getById = function (req,id, result) {
        sql.query("SELECT  t.* FROM user_role t  WHERE t.id= ? LIMIT 0,1", id, function (err, res) {             
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
User_Role.totalCount = function (req,result) {
        sql.query("SELECT count(*) TotalCount FROM user_role t  ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

User_Role.totalSearchCount = function (req,searchKey,result) {
        sql.query("SELECT count(*) TotalCount FROM user_role t  WHERE  LOWER(t.role) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.description) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.created_at) LIKE CONCAT('%','"+searchKey+"','%') ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

User_Role.getAll = function (req,offset,pageSize,result) {
        sql.query("SELECT  t.* FROM user_role t  LIMIT ?, ?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('user_role : ', res);  

                 result(null, res);
                }
            });   
};
User_Role.search = function (req,searchKey,offset,pageSize,result) {

        sql.query("SELECT  t.* FROM user_role t  WHERE  LOWER(t.role) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.description) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.created_at) LIKE CONCAT('%','"+searchKey+"','%') LIMIT ?,?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('user_role : ', res);  

                 result(null, res);
                }
            });   
};
User_Role.updateById = function(req,id, user_role, result){
  sql.query("UPDATE user_role SET role = ?,description = ?,created_at = ? WHERE id= ?",[ user_role.role, user_role.description, user_role.created_at,id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
User_Role.remove = function(req,id, result){
     sql.query("DELETE FROM user_role Where id=?",[id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= User_Role;
