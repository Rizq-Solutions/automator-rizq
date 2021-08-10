'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Package_Services object constructor

var Package_Services = function(req,package_services){
    
this.id = 0;
this.service_id = package_services.service_id;
this.package_id = package_services.package_id;
this.pricing = package_services.pricing;
this.status = package_services.status;
this.updated_by = package_services.updated_by;
this.created_by = package_services.created_by;
this.updated_at = package_services.updated_at;
this.created_at = package_services.created_at;
};
Package_Services.create = function (req,newPackage_Services, result) {    
        sql.query("INSERT INTO package_services set ?",newPackage_Services, function (err, res) {
                
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
Package_Services.getById = function (req,id, result) {
        sql.query("SELECT  t.* FROM package_services t  WHERE t.id= ? LIMIT 0,1", id, function (err, res) {             
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
Package_Services.totalCount = function (req,result) {
        sql.query("SELECT count(*) TotalCount FROM package_services t  ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Package_Services.totalSearchCount = function (req,searchKey,result) {
        sql.query("SELECT count(*) TotalCount FROM package_services t  WHERE  LOWER(t.service_id) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.package_id) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.pricing) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.status) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.updated_by) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.created_by) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.updated_at) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.created_at) LIKE CONCAT('%','"+searchKey+"','%') ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Package_Services.getAll = function (req,offset,pageSize,result) {
        sql.query("SELECT  t.* FROM package_services t  LIMIT ?, ?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('package_services : ', res);  

                 result(null, res);
                }
            });   
};
Package_Services.search = function (req,searchKey,offset,pageSize,result) {

        sql.query("SELECT  t.* FROM package_services t  WHERE  LOWER(t.service_id) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.package_id) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.pricing) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.status) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.updated_by) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.created_by) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.updated_at) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.created_at) LIKE CONCAT('%','"+searchKey+"','%') LIMIT ?,?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('package_services : ', res);  

                 result(null, res);
                }
            });   
};
Package_Services.updateById = function(req,id, package_services, result){
  sql.query("UPDATE package_services SET service_id = ?,package_id = ?,pricing = ?,status = ?,updated_by = ?,created_by = ?,updated_at = ?,created_at = ? WHERE id= ?",[ package_services.service_id, package_services.package_id, package_services.pricing, package_services.status, package_services.updated_by, package_services.created_by, package_services.updated_at, package_services.created_at,id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Package_Services.remove = function(req,id, result){
     sql.query("DELETE FROM package_services Where id=?",[id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Package_Services;
