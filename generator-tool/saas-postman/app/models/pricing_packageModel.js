'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Pricing_Package object constructor

var Pricing_Package = function(req,pricing_package){
    
this.id = 0;
this.package_name = pricing_package.package_name;
this.pricing = pricing_package.pricing;
this.available_balance = pricing_package.available_balance;
this.description = pricing_package.description;
this.type = pricing_package.type;
this.valid_period = pricing_package.valid_period;
this.status = pricing_package.status;
this.created_by = pricing_package.created_by;
this.updated_by = pricing_package.updated_by;
this.updated_at = pricing_package.updated_at;
this.created_at = pricing_package.created_at;
};
Pricing_Package.create = function (req,newPricing_Package, result) {    
        sql.query("INSERT INTO pricing_package set ?",newPricing_Package, function (err, res) {
                
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
Pricing_Package.getById = function (req,id, result) {
        sql.query("SELECT  t.* FROM pricing_package t  WHERE t.id= ? LIMIT 0,1", id, function (err, res) {             
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
Pricing_Package.totalCount = function (req,result) {
        sql.query("SELECT count(*) TotalCount FROM pricing_package t  ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Pricing_Package.totalSearchCount = function (req,searchKey,result) {
        sql.query("SELECT count(*) TotalCount FROM pricing_package t  WHERE  LOWER(t.package_name) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.pricing) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.available_balance) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.description) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.type) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.valid_period) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.status) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.created_by) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.updated_by) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.updated_at) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.created_at) LIKE CONCAT('%','"+searchKey+"','%') ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Pricing_Package.getAll = function (req,offset,pageSize,result) {
        sql.query("SELECT  t.* FROM pricing_package t  LIMIT ?, ?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('pricing_package : ', res);  

                 result(null, res);
                }
            });   
};
Pricing_Package.search = function (req,searchKey,offset,pageSize,result) {

        sql.query("SELECT  t.* FROM pricing_package t  WHERE  LOWER(t.package_name) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.pricing) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.available_balance) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.description) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.type) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.valid_period) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.status) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.created_by) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.updated_by) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.updated_at) LIKE CONCAT('%','"+searchKey+"','%') OR LOWER(t.created_at) LIKE CONCAT('%','"+searchKey+"','%') LIMIT ?,?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('pricing_package : ', res);  

                 result(null, res);
                }
            });   
};
Pricing_Package.updateById = function(req,id, pricing_package, result){
  sql.query("UPDATE pricing_package SET package_name = ?,pricing = ?,available_balance = ?,description = ?,type = ?,valid_period = ?,status = ?,created_by = ?,updated_by = ?,updated_at = ?,created_at = ? WHERE id= ?",[ pricing_package.package_name, pricing_package.pricing, pricing_package.available_balance, pricing_package.description, pricing_package.type, pricing_package.valid_period, pricing_package.status, pricing_package.created_by, pricing_package.updated_by, pricing_package.updated_at, pricing_package.created_at,id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Pricing_Package.remove = function(req,id, result){
     sql.query("DELETE FROM pricing_package Where id=?",[id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Pricing_Package;
