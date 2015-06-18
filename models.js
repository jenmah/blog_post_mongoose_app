// console.log("hello, inside models.js");
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/blogappdatabase");

var CommentSchema = new mongoose.Schema({
	author: {
		type: String,
		default: ''
	},
	cotent: {
		type: String,
		default: ''
	}	
});

var BlogSchema = new mongoose.Schema({
	name: {
		type: String,
		default: ''
	},
	content: {
		type: String,
		default: ''
	},
	comments: [CommentSchema]
});

console.log(BlogSchema);

var Comment = mongoose.model('Comment', CommentSchema);
var Blog = mongoose.model('Blog', BlogSchema);

module.exports.Comment = Comment;
module.exports.Blog = Blog;