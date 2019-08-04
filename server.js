
var express = require("express");
var app = express();
const path = require('path');
var bodyParser = require('body-parser');
var url = require('url');
var cors = require('cors');
var mysql = require('mysql');
var fs = require('fs');
var mysql =  require('mysql');




var connection = mysql.createConnection({
	  host     : '',
	  user     : '',
	  password : '',
	  database : '',
 
connection.connect();
 




var tmp = {
	"origin": "",
	"methods": "GET,POST,OPTIONS,HEAD",

}






app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req,res,next){
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type, Accept');
	next();
});


app.post('/books/', function(req,res,next){
	app.use(express.json());
	var query;
	console.log("title " +req.body.title);
	console.log("author " +req.body.author);
	console.log("genre " +req.body.genre);
	console.log("price " +req.body.price);
	query = "select count(*) as bookCount from books where title like '%" +req.body.title + "%' and author like '%" + req.body.author +"%'";
	connection.query(query, function(error,results,fields){
		if(error){
			res.status(200).send("Something went wrong during the process.Please try again later");
			
		}else if(results[0].bookCount >= 1){
			res.status(200).send("That book already exists in our database");
		
		}else{
	
			query = "INSERT INTO books values(0,'" +  req.body.author + "','" + req.body.title + "','" +  req.body.genre + "','" +  req.body.price +  "')";
			connection.query(query, function(error,results,fields){
			if(error){
				res.status(200).send("We were unable to add your book in the database");
			
			}else{
				res.status(200).send("Successfully added in the database");
			}
			});
		}		

		
	});
	
});

app.get('/', function(req,res,next){
	res.setHeader('Access-Control-Allow-Origin','');
	res.sendFile(path.join(__dirname+'/index.html'));
});

app.get("/books/", function(req,res,next){




	

	var query = "Select * from books where title like '%" + req.query.search + "%' or author like '%" +req.query.search + "%'";
	
	connection.query(query, function(error,results,fields){
		if(error){
			res.status(200).send("We can't search in the database now..Please try again later");
		}else{

			res.status(200).send(results);
			
		}
	
	});


});



app.listen(8081);

console.log("Server running...");


process.on('SIGNINT', function(){
	connection.end();
	process.exit();
});
