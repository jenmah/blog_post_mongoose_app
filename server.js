var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var server = require('http').createServer(app);
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var db = require('./models');

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: true}));

app.set('views', './views');
app.set('view engine', 'ejs');

// pre-seeded blog data
// var blogs = [
// 	{id: 0, name: "Test Number Three", post: "testing"},
// 	{id: 1, name: "Test Number Four", post: "test"}
// ];

app.get('/', function(req, res) {
	res.render('index');
});

app.get("/blogs", function (req, res){
	db.Blog.find({}, function(err, blogs){
		res.send(blogs);
	})
});


app.post("/blogs", function (req, res){
	db.Blog.create(req.body, function(err, blog){
		res.send(201, blog);
	})
});

app.delete("/blogs/:id", function (req, res){
	var blogId = req.params.id;
	db.Blog.findByIdAndRemove({
		_id: blogId
	}, function(err, blog){
		res.send(204);
	})
})


server.listen(port, function() {
	console.log('server is listening');
});