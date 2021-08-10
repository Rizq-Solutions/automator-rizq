'use strict';
var helper = require('../models/helper.js');
var Transaction_Item = require('../models/transaction_itemModel.js');

exports.listAll = function(req, res) {
	helper.checkPermission(req,"v",function (isPermited) {
        if(isPermited){
        var pageNo=1;
        if(req.query && req.query.pageNo){
        pageNo=parseInt(req.query.pageNo);
        }
        var pageSize=30;
        if(req.query && req.query.pageSize){
        pageSize=parseInt(req.query.pageSize);
        }
        var offset = (pageNo - 1) * pageSize;
  Transaction_Item.getAll(req,offset,pageSize,function(err, transaction_item) {

  if (err){
      res.status(200).send(helper.createResponse(helper.Error,0,err,""));
	  }else{
      var totalCount=0; 
      
      Transaction_Item.totalCount(req,function(err, total) {
			if (err){ 
             res.status(200).send(helper.createResponse(helper.Error,0,err,""));
            }else{ 
            if(total && total[0] && total[0].TotalCount && total[0].TotalCount>0){
            totalCount=total[0].TotalCount;
            var result={records:transaction_item,pageNo:pageNo,pageSize:pageSize,TotalRecord:totalCount};
            res.status(200).send(helper.createResponse(helper.Success,1,"Record found",result));
            }else{
            res.status(200).send(helper.createResponse(helper.Error,0,"No Record Found",""));
            }
            }});
	}

    
  });
  } else{
            res.status(403).send(helper.createResponse(helper.Error,0,helper.authError,""));
		}
    });
};


exports.search = function(req, res) {
	helper.checkPermission(req,"v",function (isPermited) {
        if(isPermited){
        var pageNo=1;
        if(req.query && req.query.pageNo){
        pageNo=parseInt(req.query.pageNo);
        }
        var pageSize=30;
        if(req.query && req.query.pageSize){
        pageSize=parseInt(req.query.pageSize);
        }
        var offset = (pageNo - 1) * pageSize;
  Transaction_Item.search(req,req.params.searchKey,offset,pageSize,function(err, transaction_item) {

  if (err){
      res.status(200).send(helper.createResponse(helper.Error,0,err,""));
	  }else{
       var totalCount=0;
		  Transaction_Item.totalSearchCount(req,req.params.searchKey,function(err, total) {
			if (err){ 
             res.status(200).send(helper.createResponse(helper.Error,0,err,""));
            }else{ 
            if(total && total[0] && total[0].TotalCount && total[0].TotalCount>0){
            totalCount=total[0].TotalCount;
            var result={records:transaction_item,pageNo:pageNo,pageSize:pageSize,TotalRecord:totalCount};
            res.status(200).send(helper.createResponse(helper.Success,1,"Record found",result));
            }else{
            res.status(200).send(helper.createResponse(helper.Error,0,"No Record Found",""));
            }
            }});
	}

    
  });
  } else{
            res.status(403).send(helper.createResponse(helper.Error,0,helper.authError,""));
		}
    });
};


exports.createNew = function(req, res) {
helper.checkPermission(req,"a",function (isPermited) {
        if(isPermited){
  var reqObj = new Transaction_Item(req,req.body);
   if(!reqObj.transaction_id || !reqObj.item_id || !reqObj.created_by || !reqObj.creation_date || !reqObj.last_updated_by || !reqObj.last_update_date){

            res.status(400).send({ error:true, message: 'Please provide required fields' });

        }
else{
  
  Transaction_Item.create(req,reqObj, function(err, transaction_item) {
    
	  if (err){
      res.status(200).send(helper.createResponse(helper.Error,0,err,""));
	  }else{
    res.status(200).send(helper.createResponse(helper.Success,1,"Record Created",transaction_item));
	}
  });
}
} else{
            res.status(403).send(helper.createResponse(helper.Error,0,helper.authError,""));
		}
    });
};


exports.readById = function(req, res) {
helper.checkPermission(req,"v",function (isPermited) {
        if(isPermited){
  Transaction_Item.getById(req,req.params.transaction_item_id, function(err, transaction_item) {
      if (err){
      res.status(200).send(helper.createResponse(helper.Error,0,err,""));
	  }else{
    res.status(200).send(helper.createResponse(helper.Success,1,"Record found",transaction_item[0]));
	}
  });
  } else{
            res.status(403).send(helper.createResponse(helper.Error,0,helper.authError,""));
		}
    });
};


exports.updateById = function(req, res) {
helper.checkPermission(req,"u",function (isPermited) {
        if(isPermited){
  Transaction_Item.updateById(req,req.params.transaction_item_id, new Transaction_Item(req,req.body), function(err, transaction_item) {
     if (err){
      res.status(200).send(helper.createResponse(helper.Error,0,err,""));
	  }else{
    res.status(200).send(helper.createResponse(helper.Success,1,"Record Updated",""));
	}
  });
  } else{
            res.status(403).send(helper.createResponse(helper.Error,0,helper.authError,""));
		}
    });
};


exports.deleteById = function(req, res) {
helper.checkPermission(req,"d",function (isPermited) {
        if(isPermited){
  Transaction_Item.remove(req,req.params.transaction_item_id, function(err, transaction_item) {
      if (err){
      res.status(200).send(helper.createResponse(helper.Error,0,err,""));
	  }else{
    res.status(200).send(helper.createResponse(helper.Success,1,"Deleted",""));
	}
  });
  } else{
            res.status(403).send(helper.createResponse(helper.Error,0,helper.authError,""));
		}
    });
};
