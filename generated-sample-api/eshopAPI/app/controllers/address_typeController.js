'use strict';
var helper = require('../models/helper.js');
var Address_Type = require('../models/address_typeModel.js');

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
  Address_Type.getAll(req,offset,pageSize,function(err, address_type) {

  if (err){
      res.status(200).send(helper.createResponse(helper.Error,0,err,""));
	  }else{
      var totalCount=0; 
      
      Address_Type.totalCount(req,function(err, total) {
			if (err){ 
             res.status(200).send(helper.createResponse(helper.Error,0,err,""));
            }else{ 
            if(total && total[0] && total[0].TotalCount && total[0].TotalCount>0){
            totalCount=total[0].TotalCount;
            var result={records:address_type,pageNo:pageNo,pageSize:pageSize,TotalRecord:totalCount};
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
  Address_Type.search(req,req.params.searchKey,offset,pageSize,function(err, address_type) {

  if (err){
      res.status(200).send(helper.createResponse(helper.Error,0,err,""));
	  }else{
       var totalCount=0;
		  Address_Type.totalSearchCount(req,req.params.searchKey,function(err, total) {
			if (err){ 
             res.status(200).send(helper.createResponse(helper.Error,0,err,""));
            }else{ 
            if(total && total[0] && total[0].TotalCount && total[0].TotalCount>0){
            totalCount=total[0].TotalCount;
            var result={records:address_type,pageNo:pageNo,pageSize:pageSize,TotalRecord:totalCount};
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
  var reqObj = new Address_Type(req,req.body);
   if(!reqObj.created_by || !reqObj.creation_date || !reqObj.last_updated_by || !reqObj.last_update_date){

            res.status(400).send({ error:true, message: 'Please provide required fields' });

        }
else{
  
  Address_Type.create(req,reqObj, function(err, address_type) {
    
	  if (err){
      res.status(200).send(helper.createResponse(helper.Error,0,err,""));
	  }else{
    res.status(200).send(helper.createResponse(helper.Success,1,"Record Created",address_type));
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
  Address_Type.getById(req,req.params.address_type_id, function(err, address_type) {
      if (err){
      res.status(200).send(helper.createResponse(helper.Error,0,err,""));
	  }else{
    res.status(200).send(helper.createResponse(helper.Success,1,"Record found",address_type[0]));
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
  Address_Type.updateById(req,req.params.address_type_id, new Address_Type(req,req.body), function(err, address_type) {
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
  Address_Type.remove(req,req.params.address_type_id, function(err, address_type) {
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
