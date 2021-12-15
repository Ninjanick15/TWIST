const express = require('express');//Set up the express module
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
const path = require('path')

app.use(bodyParser.urlencoded({ extended: true })); 

//sends to index.html when visiting our link
router.get('/', function(req, res){ 
  res.sendFile(path.join(__dirname, '/index.html'));
});
app.use('/', router);

//we need one of these for each html page we have. 
router.get('/cuisine', function(req, res){ // set this to be the same as your href <a> tag in the nav menu 
  res.sendFile(path.join(__dirname, '/cuisine.html')); // the registration page
});
app.use('/cuisine', router); //same as top

router.get('/account', function(req, res){ 
  res.sendFile(path.join(__dirname, '/account.html')); // the general information page
});
app.use('/account', router);

router.get('/about', function(req, res){ 
  res.sendFile(path.join(__dirname, '/about.html')); // the speakers page
});
app.use('/about', router);

router.get('/diet', function(req, res){ 
  res.sendFile(path.join(__dirname, '/diet.html')); // the account page
});
app.use('/diet', router);

router.get('/editaccount', function(req, res){ 
  res.sendFile(path.join(__dirname, '/editaccount.html')); // the admin page
});
app.use('/editaccount ', router);

router.get('/login', function(req, res){ 
  res.sendFile(path.join(__dirname, '/login.html')); // the admin page
});
app.use('/login', router);

router.get('/prep', function(req, res){ 
  res.sendFile(path.join(__dirname, '/prep.html')); // the admin page
});
app.use('/prep', router);

router.get('/search', function(req, res){ 
  res.sendFile(path.join(__dirname, '/search.html')); // the admin page
});
app.use('/search', router);

router.get('/signup', function(req, res){ 
  res.sendFile(path.join(__dirname, '/signup.html')); // the admin page
});
app.use('/signup', router);

app.get('/style.css', function(req, res){
  res.sendFile(path.join(__dirname, '/style.css')); //link the css
});

var img = 
require('path').join(__dirname,'/Assets');
app.use(express.static(img)); //link to images and other assets. 

//remoteSQL database connection
var mysql = require('mysql');

var con = mysql.createPool({ // .createPool if we want the connection to stay open(pool), .createConnection closes after a amount of time (normal)
  host: "remotemysql.com", //do not change these four lines. login details for our DB
  user: "o5eH6KejvX",
  password: "NkmSiwMpoR",
  database:"o5eH6KejvX"
});

con.getConnection(function(err) { // .getConnection for pool connection, .connect for normal connection.
  if (err){
console.log(err)
return
}
  console.log("Connected to database!");
});

//display html
let server = app.listen(8080, function(){

});