'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//City object constructor
var City = function(req,city){
    
this.city_id = 0;
this.city = city.city;
this.created_by = city.created_by;
this.creation_date = new Date();
this.last_updated_by = city.last_updated_by;
this.last_update_date = new Date();
};
City.create = function (req,newCity, result) {    
        sql.query("INSERT INTO city set ?",newCity, function (err, res) {
                
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
City.getById = function (req,city_id, result) {
        sql.query("SELECT  t.* FROM city t  WHERE t.city_id= ? LIMIT 0,1", city_id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
City.totalCount = function (req,result) {
        sql.query("SELECT count(*) TotalCount FROM city t  ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

City.totalSearchCount = function (req,searchKey,result) {
        sql.query("SELECT count(*) TotalCount FROM city t  WHERE  t.city LIKE CONCAT('%','"+searchKey +"','%') OR t.created_by LIKE CONCAT('%','"+searchKey +"','%') OR t.creation_date LIKE CONCAT('%','"+searchKey +"','%') OR t.last_updated_by LIKE CONCAT('%','"+searchKey +"','%') OR t.last_update_date LIKE CONCAT('%','"+searchKey +"','%') ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

City.getAll = function (req,offset,pageSize,result) {
        sql.query("SELECT  t.* FROM city t  LIMIT ?, ?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('city : ', res);  

                 result(null, res);
                }
            });   
};
City.search = function (req,searchKey,offset,pageSize,result) {

        sql.query("SELECT  t.* FROM city t  WHERE  t.city LIKE CONCAT('%','"+searchKey +"','%') OR t.created_by LIKE CONCAT('%','"+searchKey +"','%') OR t.creation_date LIKE CONCAT('%','"+searchKey +"','%') OR t.last_updated_by LIKE CONCAT('%','"+searchKey +"','%') OR t.last_update_date LIKE CONCAT('%','"+searchKey +"','%') LIMIT ?,?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('city : ', res);  

                 result(null, res);
                }
            });   
};
City.updateById = function(req,city_id, city, result){
  sql.query("UPDATE city SET city = ?,created_by = ?,last_updated_by = ? WHERE city_id= ?",[ city.city, city.created_by, city.last_updated_by,city_id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
City.remove = function(req,city_id, result){
     sql.query("DELETE FROM city Where city_id=?",[city_id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= City;
