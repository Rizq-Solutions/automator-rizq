'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Contact object constructor
var Contact = function(req,contact){
    
this.contact_id = 0;
this.account_id = contact.account_id;
this.contact_type = contact.contact_type;
this.email = contact.email;
this.first_name = contact.first_name;
this.middle_name = contact.middle_name;
this.last_name = contact.last_name;
this.created_by = contact.created_by;
this.creation_date = contact.creation_date;
this.last_updated_by = contact.last_updated_by;
this.last_update_date = contact.last_update_date;
};
Contact.create = function (req,newContact, result) {    
        sql.query("INSERT INTO contact set ?",newContact, function (err, res) {
                
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
Contact.getById = function (req,contact_id, result) {
        sql.query("SELECT  t.* FROM contact t  WHERE t.contact_id= ? LIMIT 0,1", contact_id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Contact.totalCount = function (req,result) {
        sql.query("SELECT count(*) TotalCount FROM contact t  ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Contact.totalSearchCount = function (req,searchKey,result) {
        sql.query("SELECT count(*) TotalCount FROM contact t  WHERE  t.account_id LIKE CONCAT('%','"+searchKey +"','%') OR t.contact_type LIKE CONCAT('%','"+searchKey +"','%') OR t.email LIKE CONCAT('%','"+searchKey +"','%') OR t.first_name LIKE CONCAT('%','"+searchKey +"','%') OR t.middle_name LIKE CONCAT('%','"+searchKey +"','%') OR t.last_name LIKE CONCAT('%','"+searchKey +"','%') OR t.created_by LIKE CONCAT('%','"+searchKey +"','%') OR t.creation_date LIKE CONCAT('%','"+searchKey +"','%') OR t.last_updated_by LIKE CONCAT('%','"+searchKey +"','%') OR t.last_update_date LIKE CONCAT('%','"+searchKey +"','%') ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Contact.getAll = function (req,offset,pageSize,result) {
        sql.query("SELECT  t.* FROM contact t  LIMIT ?, ?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('contact : ', res);  

                 result(null, res);
                }
            });   
};
Contact.search = function (req,searchKey,offset,pageSize,result) {

        sql.query("SELECT  t.* FROM contact t  WHERE  t.account_id LIKE CONCAT('%','"+searchKey +"','%') OR t.contact_type LIKE CONCAT('%','"+searchKey +"','%') OR t.email LIKE CONCAT('%','"+searchKey +"','%') OR t.first_name LIKE CONCAT('%','"+searchKey +"','%') OR t.middle_name LIKE CONCAT('%','"+searchKey +"','%') OR t.last_name LIKE CONCAT('%','"+searchKey +"','%') OR t.created_by LIKE CONCAT('%','"+searchKey +"','%') OR t.creation_date LIKE CONCAT('%','"+searchKey +"','%') OR t.last_updated_by LIKE CONCAT('%','"+searchKey +"','%') OR t.last_update_date LIKE CONCAT('%','"+searchKey +"','%') LIMIT ?,?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('contact : ', res);  

                 result(null, res);
                }
            });   
};
Contact.updateById = function(req,contact_id, contact, result){
  sql.query("UPDATE contact SET account_id = ?,contact_type = ?,email = ?,first_name = ?,middle_name = ?,last_name = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE contact_id= ?",[ contact.account_id, contact.contact_type, contact.email, contact.first_name, contact.middle_name, contact.last_name, contact.created_by, contact.creation_date, contact.last_updated_by, contact.last_update_date,contact_id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Contact.remove = function(req,contact_id, result){
     sql.query("DELETE FROM contact Where contact_id=?",[contact_id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Contact;
