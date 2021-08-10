'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Services object constructor

var Services = function(req,services){
    
this.id = 0;
this.parent = services.parent;
this.name = services.name;
this.description = services.description;
this.status = services.status;
this.created_by = services.created_by;
this.updated_by = services.updated_by;
this.updated_at = services.updated_at;
this.created_at = services.created_at;
};
Services.create = function (req,newServices, result) {    
        sql.query("INSERT INTO services set ?",newServices, function (err, res) {
                
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
Services.getById = function (req,id, result) {
        sql.query("SELECT  t.* FROM services t  WHERE t.id= ? LIMIT 0,1", id, function (err, res) {             
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
Services.totalCount = function (req,result) {
        sql.query("SELECT count(*) TotalCount FROM services t  ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Services.totalSearchCount = function (req,searchKey,result) {
        sql.query("SELECT count(*) TotalCount FROM services t  WHERE  LOWER(t.parent) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.name) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.description) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.status) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.created_by) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.updated_by) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.updated_at) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.created_at) LIKE CONCAT('%','"+searchKey+"','%') ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Services.getAll = function (req,offset,pageSize,result) {
        sql.query("SELECT  t.* FROM services t  LIMIT ?, ?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('services : ', res);  

                 result(null, res);
                }
            });   
};
Services.search = function (req,searchKey,offset,pageSize,result) {

        sql.query("SELECT  t.* FROM services t  WHERE  LOWER(t.parent) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.name) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.description) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.status) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.created_by) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.updated_by) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.updated_at) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.created_at) LIKE CONCAT('%','"+searchKey+"','%') LIMIT ?,?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('services : ', res);  

                 result(null, res);
                }
            });   
};
Services.updateById = function(req,id, services, result){
  sql.query("UPDATE services SET parent = ?,name = ?,description = ?,status = ?,created_by = ?,updated_by = ?,updated_at = ?,created_at = ? WHERE id= ?",[ services.parent, services.name, services.description, services.status, services.created_by, services.updated_by, services.updated_at, services.created_at,id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Services.remove = function(req,id, result){
     sql.query("DELETE FROM services Where id=?",[id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Services;
