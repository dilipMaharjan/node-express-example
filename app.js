var express=require('express');
var bodyParser=require('body-parser');
var path=require('path');
var app=express();

//set view engine

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//dummy data
const users=[
  {
    name:"Juan",
    age:26
  },
  {
    name:"Nick",
    age:21
  },
  {
    name:"Dilip",
    age:28
  },
  ];
//custom middleware

var logger=(req,res,next)=>{
console.log('Logging...');
next();
}

//need to use logger to be able to use it
app.use(logger);

//using body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

//setting up path to static files
app.use(express.static(path.join(__dirname,'public')));

//making get request
app.get('/',(req,res)=>{
  res.render('index',{
    title:"Users",
    users:users
  });
});

//listening to port 2017
app.listen(2017,()=>{
  console.log('Node express app started on 2017');
})
