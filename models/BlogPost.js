const mongoose = require('mongoose');
const schema = mongoose.Schema;


const BlogPostSchema = new schema({
    title: String,
    body: String
});

BlogPost = mongoose.model('BlogPost', BlogPostSchema); //map wth our collection

module.exports = BlogPost;