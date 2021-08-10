'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Telephone object constructor
var Telephone = function(req,telephone){
    
this.telephone_id = 0;
this.contact_id = telephone.contact_id;
this.area_code = telephone.area_code;
this.telephone_number = telephone.telephone_number;
this.telephone_type = telephone.telephone_type;
this.created_by = telephone.created_by;
this.creation_date = telephone.creation_date;
this.last_updated_by = telephone.last_updated_by;
this.last_update_date = telephone.last_update_date;
};
Telephone.create = function (req,newTelephone, result) {    
        sql.query("INSERT INTO telephone set ?",newTelephone, function (err, res) {
                
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
Telephone.getById = function (req,telephone_id, result) {
        sql.query("SELECT  t.* FROM telephone t  WHERE t.telephone_id= ? LIMIT 0,1", telephone_id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Telephone.totalCount = function (req,result) {
        sql.query("SELECT count(*) TotalCount FROM telephone t  ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Telephone.totalSearchCount = function (req,searchKey,result) {
        sql.query("SELECT count(*) TotalCount FROM telephone t  WHERE  t.contact_id LIKE CONCAT('%','"+searchKey +"','%') OR t.area_code LIKE CONCAT('%','"+searchKey +"','%') OR t.telephone_number LIKE CONCAT('%','"+searchKey +"','%') OR t.telephone_type LIKE CONCAT('%','"+searchKey +"','%') OR t.created_by LIKE CONCAT('%','"+searchKey +"','%') OR t.creation_date LIKE CONCAT('%','"+searchKey +"','%') OR t.last_updated_by LIKE CONCAT('%','"+searchKey +"','%') OR t.last_update_date LIKE CONCAT('%','"+searchKey +"','%') ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Telephone.getAll = function (req,offset,pageSize,result) {
        sql.query("SELECT  t.* FROM telephone t  LIMIT ?, ?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('telephone : ', res);  

                 result(null, res);
                }
            });   
};
Telephone.search = function (req,searchKey,offset,pageSize,result) {

        sql.query("SELECT  t.* FROM telephone t  WHERE  t.contact_id LIKE CONCAT('%','"+searchKey +"','%') OR t.area_code LIKE CONCAT('%','"+searchKey +"','%') OR t.telephone_number LIKE CONCAT('%','"+searchKey +"','%') OR t.telephone_type LIKE CONCAT('%','"+searchKey +"','%') OR t.created_by LIKE CONCAT('%','"+searchKey +"','%') OR t.creation_date LIKE CONCAT('%','"+searchKey +"','%') OR t.last_updated_by LIKE CONCAT('%','"+searchKey +"','%') OR t.last_update_date LIKE CONCAT('%','"+searchKey +"','%') LIMIT ?,?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('telephone : ', res);  

                 result(null, res);
                }
            });   
};
Telephone.updateById = function(req,telephone_id, telephone, result){
  sql.query("UPDATE telephone SET contact_id = ?,area_code = ?,telephone_number = ?,telephone_type = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE telephone_id= ?",[ telephone.contact_id, telephone.area_code, telephone.telephone_number, telephone.telephone_type, telephone.created_by, telephone.creation_date, telephone.last_updated_by, telephone.last_update_date,telephone_id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Telephone.remove = function(req,telephone_id, result){
     sql.query("DELETE FROM telephone Where telephone_id=?",[telephone_id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Telephone;
