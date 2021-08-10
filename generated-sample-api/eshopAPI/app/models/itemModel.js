'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Item object constructor
var Item = function(req,item){
    
this.item_id = 0;
this.item_title = item.item_title;
this.item_subtitle = item.item_subtitle;
this.item_category_id = item.item_category_id;
this.item_subcategory_id = item.item_subcategory_id;
this.created_by = item.created_by;
this.creation_date = item.creation_date;
this.last_updated_by = item.last_updated_by;
this.last_update_date = item.last_update_date;
};
Item.create = function (req,newItem, result) {    
        sql.query("INSERT INTO item set ?",newItem, function (err, res) {
                
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
Item.getById = function (req,item_id, result) {
        sql.query("SELECT  t.* FROM item t  WHERE t.item_id= ? LIMIT 0,1", item_id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Item.totalCount = function (req,result) {
        sql.query("SELECT count(*) TotalCount FROM item t  ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Item.totalSearchCount = function (req,searchKey,result) {
        sql.query("SELECT count(*) TotalCount FROM item t  WHERE  t.item_title LIKE CONCAT('%','"+searchKey +"','%') OR t.item_subtitle LIKE CONCAT('%','"+searchKey +"','%') OR t.item_category_id LIKE CONCAT('%','"+searchKey +"','%') OR t.item_subcategory_id LIKE CONCAT('%','"+searchKey +"','%') OR t.created_by LIKE CONCAT('%','"+searchKey +"','%') OR t.creation_date LIKE CONCAT('%','"+searchKey +"','%') OR t.last_updated_by LIKE CONCAT('%','"+searchKey +"','%') OR t.last_update_date LIKE CONCAT('%','"+searchKey +"','%') ", function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Item.getAll = function (req,offset,pageSize,result) {
        sql.query("SELECT  t.* FROM item t  LIMIT ?, ?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('item : ', res);  

                 result(null, res);
                }
            });   
};
Item.search = function (req,searchKey,offset,pageSize,result) {

        sql.query("SELECT  t.* FROM item t  WHERE  t.item_title LIKE CONCAT('%','"+searchKey +"','%') OR t.item_subtitle LIKE CONCAT('%','"+searchKey +"','%') OR t.item_category_id LIKE CONCAT('%','"+searchKey +"','%') OR t.item_subcategory_id LIKE CONCAT('%','"+searchKey +"','%') OR t.created_by LIKE CONCAT('%','"+searchKey +"','%') OR t.creation_date LIKE CONCAT('%','"+searchKey +"','%') OR t.last_updated_by LIKE CONCAT('%','"+searchKey +"','%') OR t.last_update_date LIKE CONCAT('%','"+searchKey +"','%') LIMIT ?,?",[offset,pageSize],function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('item : ', res);  

                 result(null, res);
                }
            });   
};
Item.updateById = function(req,item_id, item, result){
  sql.query("UPDATE item SET item_title = ?,item_subtitle = ?,item_category_id = ?,item_subcategory_id = ?,created_by = ?,creation_date = ?,last_updated_by = ?,last_update_date = ? WHERE item_id= ?",[ item.item_title, item.item_subtitle, item.item_category_id, item.item_subcategory_id, item.created_by, item.creation_date, item.last_updated_by, item.last_update_date,item_id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Item.remove = function(req,item_id, result){
     sql.query("DELETE FROM item Where item_id=?",[item_id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Item;
