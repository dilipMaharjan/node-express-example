var express=require('express');
var bodyParser=require('body-parser');
var path=require('path');

var app=express();

//custom middleware

var logger=(req,res,next)=>{
console.log('Logging...');
next();
}

//need to use logger to be able to use it
app.use(logger);

//making get request
app.get('/',(req,res)=>{
  res.send('Node Express App started at port 2017');
});

//listening to port 2017
app.listen(2017,()=>{
  console.log('Node express app started on 2017');
})
