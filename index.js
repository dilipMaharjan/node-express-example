const http=require('http');
const hostname='127.0.0.1';
const port='2017';

const server=http.createServer((req,res)=>{
  res.statusCode=200;
  res.setHeader('Content-type','text/plain');
  res.end('Hello Node From Node Server');
});

server.listen(port,hostname,()=>{
  console.log("Server started on " + port)
});
