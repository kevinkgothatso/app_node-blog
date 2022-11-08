const express = require("express");
const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');
const bodyParser = require('body-parser');

mongoose.connect("mongodb://localhost:27017/BlogPost", {useNewUrlParser: true});
const app =  new express();

//getting data from form using third party tool
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const ejs = require('ejs');  //importing ejs
app.set('view engine','ejs')


app.use(express.static('public'));  //static files to be served

app.listen(3000, ()=>{
     console.log("Running Express at port 3000")  //running the server
})

app.get('/',async (req,res)=>{
     const blogposts = await BlogPost.find({});
     res.render('index',{
     blogposts
     });

     console.log(blogposts);  //use async to retirve data
});


app.get('/about',(req, res)=>{
     res.render("about");
});

app.get('/contact',(req, res)=>{
     res.render("contact");
});

app.get('/post',(req, res)=>{  
     res.render("post");
});


//form post sub view
app.get("/posts/new",(req,res)=>{
     res.render('create');
 });


 //posting data
 app.post('/posts/store', async (req, res)=>{
      await  BlogPost.create(req.body,(error, leave)=>{
          console.log(error);
            console.log(req.body);
          //  res.redirect('/');
      });
 });
 