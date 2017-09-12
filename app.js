var express=require('express');
var bodyParser=require('body-parser');
var path=require('path');

var app=express();
app.get('/',(req,res)=>{
  res.send('Node Express App started at port 2017');
});
app.listen(2017,()=>{
  console.log('Node express app started on 2017');
})
