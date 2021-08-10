'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Item_Subcategory object constructor
var Item_Subcategory = function(req,item_subcategory){
    
this.item_subcategory_id = 0;
this.category_id = item_subcategory.category_id;
this.item_subcategory = item_subcategory.item_subcategory;
this.created_by = item_subcategory.created_by;
this.creation_date = item_subcategory.creation_date;
this.last_updated_by = item_subcategory.last_updated_by;
this.last_update_date = item_subcategory.last_update_date;
};
Item_Subcategory.create = function (req,newItem_Subcategory, result) {    
        sql.query("INSERT INTO item_subcategory set ?",newItem_Subcategory, function (err, res) {
                
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
Item_Subcategory.getById = function (req,item_subcategory_id, result) {
        sql.query("SELECT  t.* FROM item_subcategory t  WHERE t.item_subcategory_id= ? LIMIT 0,1", item_subcategory_id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Item_Subcategory.totalCount = function (req,result) {
        sql.query("SELECT count(*) TotalCount FROM item_subcategory t  ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Item_Subcategory.totalSearchCount = function (req,searchKey,result) {
        sql.query("SELECT count(*) TotalCount FROM item_subcategory t  WHERE  t.category_id LIKE CONCAT('%','"+searchKey +"','%') OR t.item_subcategory LIKE CONCAT('%','"+searchKey +"','%') OR t.created_by LIKE CONCAT('%','"+searchKey +"','%') OR t.creation_date LIKE CONCAT('%','"+searchKey +"','%') OR t.last_updated_by LIKE CONCAT('%','"+searchKey +"','%') OR t.last_update_date LIKE CONCAT('%','"+searchKey +"','%') ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Item_Subcategory.getAll = function (req,offset,pageSize,result) {
        sql.query("SELECT  t.* FROM item_subcategory t  LIMIT ?, ?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('item_subcategory : ', res);  

                 result(null, res);
                }
            });   
};
Item_Subcategory.search = function (req,searchKey,offset,pageSize,result) {

        sql.query("SELECT  t.* FROM item_subcategory t  WHERE  t.category_id LIKE CONCAT('%','"+searchKey +"','%') OR t.item_subcategory LIKE CONCAT('%','"+searchKey +"','%') OR t.created_by LIKE CONCAT('%','"+searchKey +"','%') OR t.creation_date LIKE CONCAT('%','"+searchKey +"','%') OR t.last_updated_by LIKE CONCAT('%','"+searchKey +"','%') OR t.last_update_date LIKE CONCAT('%','"+searchKey +"','%') LIMIT ?,?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('item_subcategory : ', res);  

                 result(null, res);
                }
            });   
};
Item_Subcategory.updateById = function(req,item_subcategory_id, item_subcategory, result){
  sql.query("UPDATE item_subcategory SET category_id = ?,item_subcategory = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE item_subcategory_id= ?",[ item_subcategory.category_id, item_subcategory.item_subcategory, item_subcategory.created_by, item_subcategory.creation_date, item_subcategory.last_updated_by, item_subcategory.last_update_date,item_subcategory_id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Item_Subcategory.remove = function(req,item_subcategory_id, result){
     sql.query("DELETE FROM item_subcategory Where item_subcategory_id=?",[item_subcategory_id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Item_Subcategory;
