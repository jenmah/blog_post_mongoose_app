var REPL = require('repl');
var db = require('./models');

var repl = REPL.start("Blogs >");

repl.context.db = db;

db.Blog.collection.remove();
db.Post.collection.remove();

// var post1 = db.Post.create({
// 	comment: "PLEASE WORK!"
// }, function(err, post){
// 	console.log('blog created');
// })

// var blog1 = db.Blog.create({
// 	name: "My First Blog",
// 	post: "Yadda yadda yadda"
// }, function(err, blog){
// 	console.log('blog created');
// })

// db.Blog.create({
// 	name: "My second blog",
// 	post: "blahhity blah blah"
// }, function(err, blog){
// 	console.log('blog created');
// 	console.log(blog);
// 	console.log('database seeded');
// 	process.exit();
// })



var comment1 = db.Comment.create({
 author: 'Jeremy Marer',
 content: 'Yeeeeeiiiii'
}, function(err, comment){
   db.Blog.create({
     name: 'Primer post', 
     content: 'Este es mi primer post', 
     comments: [comment]
   }, function(err, blog){
     console.log(blog);
   })
;})