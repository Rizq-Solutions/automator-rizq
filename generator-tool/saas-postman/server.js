var parseurl = require('parseurl');
var md5 = require('md5');
var SECRET_KEY="Paglaho";
var crypto = require('crypto'),
    algorithm = 'aes192';
var fs = require('fs');
var cors = require('cors');
var session = require('express-session');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var http = require('http');
var https = require('https');
const jwt  = require('jsonwebtoken');
var fileUpload = require('express-fileupload');
var helper = require('./app/models/helper');
const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 8400;
  portssl=8444;
  app.use(cors());
  app.use(fileUpload());
  app.use(session({
		secret: 'keyboard cat',
		resave: false,
		saveUninitialized: true
	}));
app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});

const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host     : 'localhost',
    port     : '3306',
    user     : 'saas',
    password : '121073ms',
    database : 'saas'

});
 
// connect to database
mc.connect();
//uncomment options for ssl
//var options = {
//    key: fs.readFileSync('/domain.com.key'),
//    cert: fs.readFileSync('/certificate.crt')
//};
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Credentials', false);
    res.header('Access-Control-Max-Age', '86400');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, x_chord, y_chord, z_chord, d_chord');
    next();
};

var encrypt = function(text){
    var cipher = crypto.createCipher(algorithm,SECRET_KEY);
    var crypted = cipher.update(text,'utf8','hex');
    crypted += cipher.final('hex');
    return crypted;
};

var decrypt = function(text){
    var decipher = crypto.createDecipher(algorithm,SECRET_KEY);
    var dec = decipher.update(text,'hex','utf8');
    dec += decipher.final('utf8');
    return dec;
};

const jwtKey = 'my_secret_key';
const jwtExpirySeconds ="10h";

const users = {
  user1: 'password1',
  user2: 'password2'
}

const tokenGen = (req, res) => {
  // Get credentials from JSON body
  const { username, password } = req.body
  if (!username || !password || users[username] !== password) {
    // return 401 error is username or password doesn't exist, or if password does
    // not match the password in our records
    return res.status(401).end()
  }

  // Create a new token with the username in the payload
  // and which expires 1 day after issue
  //jwtExpirySeconds ="20d" // it will be expired after 20 days
  //jwtExpirySeconds= 120 // it will be expired after 120ms
  const token = jwt.sign({ username }, jwtKey, {
    algorithm: 'HS256',
    expiresIn: jwtExpirySeconds
  })
  console.log('token:', token)
  var response = {"expires_in":jwtExpirySeconds,"access_token":token,"token_type": "bearer"};
  res.status(200).send(helper.createResponse(helper.Success,1,"Token Generated",response));
}


app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(allowCrossDomain);

http.createServer(app).listen(port);
// Create an HTTPS service identical to the HTTP service.
//https.createServer(options, app).listen(portssl);
//app.listen(port);

console.log('API server started on: ' + port);

app.post('/token', tokenGen);
var balanceRoutes = require('./app/routes/balanceRoute');
var package_servicesRoutes = require('./app/routes/package_servicesRoute');
var pricing_packageRoutes = require('./app/routes/pricing_packageRoute');
var pricing_typeRoutes = require('./app/routes/pricing_typeRoute');
var servicesRoutes = require('./app/routes/servicesRoute');
var topup_recordRoutes = require('./app/routes/topup_recordRoute');
var usage_logRoutes = require('./app/routes/usage_logRoute');
var userRoutes = require('./app/routes/userRoute');
var user_packageRoutes = require('./app/routes/user_packageRoute');
var user_roleRoutes = require('./app/routes/user_roleRoute');

balanceRoutes(app)
package_servicesRoutes(app)
pricing_packageRoutes(app)
pricing_typeRoutes(app)
servicesRoutes(app)
topup_recordRoutes(app)
usage_logRoutes(app)
userRoutes(app)
user_packageRoutes(app)
user_roleRoutes(app)


