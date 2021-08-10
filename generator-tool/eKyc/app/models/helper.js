const jwt  = require('jsonwebtoken');
function Helper(){
	const jwtKey = 'my_secret_key';
	this.hasOwnProperty = function (obj,propertyName) {
        if(propertyName in obj){
            return true;
        }else{
            return false;
        }
    }
	this.createResponse = function(status,code,message,document){
        return {"Status":status,"Code":code,"Message":message,"Document":document};
    };
	this.encrypt = function(text){
        var cipher = crypto.createCipher(algorithm,this.SECRET_KEY);
        var crypted = cipher.update(text,'utf8','hex');
        crypted += cipher.final('hex');
        return crypted;
    };

    this.decrypt=function(text){
        var decipher = crypto.createDecipher(algorithm,this.SECRET_KEY);
        var dec = decipher.update(text,'hex','utf8');
        dec += decipher.final('utf8');
        return dec;
    };
	
	this.hasOwnProperty = function (obj,propertyName) {
        if(propertyName in obj){
            return true;
        }else{
            return false;
        }
    }
	
	this.checkPermission = function (req,action,_callback) {
        try{	console.log("checkPermission");
			 const token = this.extractToken(req);
			 if (!token) {
			 //enable token check - uncomment below line
				//return _callback(0);
			 }
			 var payload
			  try {
				// Parse the JWT string and store the result in `payload`.
				// Note that we are passing the key in this method as well. This method will throw an error
				// if the token is invalid (if it has expired according to the expiry time we set on sign in),
				// or if the signature does not match
				payload = jwt.verify(token, jwtKey)
				console.log("JWT Token data",payload);
			  } catch (e) {
			   //enable token check - uncomment below line
				//return _callback(0);
			  }
		
			if(true){ //put your own condition
				return _callback(1);
			}
			 else{
				   return _callback(0);
			 }
        }catch (ex) {
            console.error("Internal error:" + ex);
            return _callback(0);
        }
    };
	
	this.extractToken = function(req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
        return req.query.token;
    }
    return null;
	}

}

module.exports = new Helper();
