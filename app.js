var express=require('express');
var bodyParser=require('body-parser');
var path=require('path');
var mongojs=require('mongojs');
var app=express();
var db=mongojs('customerapp',['users']);
//set view engine

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

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
db.users.find(function(err,docs){
  res.render('index',{
    title:"Users",
    users:docs
  });
})

});
app.post('/add',(req,res)=>{
  var name =req.body.name;
  var age =req.body.age;
  db.users.insert({name:name,age:age},function(err,result){
    if(err){
      console.log('Error', err);
    }
    res.redirect('/');
  })
});

//listening to port 2017
app.listen(2017,()=>{
  console.log('Node express app started on 2017');
})
