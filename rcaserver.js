const http=require('http');
//defining host name
const _=require('lodash')
let fs=require('fs');
//const events = require('events');
//const {  } = require('path');
const hostName='127.0.0.1'//local hosgitgit
const port=2000;

const server=  http.createServer((req,res)=>{
  
 res.statusCode=200;
  res.setHeader('content-type','text/html')
console.log(req.url,req.method)
//lodash 
const num=_.random(0, 20)
const verb=fight;


const greet=_.once(()=>{console.log("say hello")})
console.log(num)
greet()
let path='./view/'
switch(req.url){
  case '/':
    res.statusCode=200;
path+='index.html';

break;
case '/about':
  path+='about.html';
  res.statusCode=200;
  break;
  case '/about-me':
    res.statusCode=301;
    res.setHeader('location','/about')
    res.end()
  default:
    res.statusCode=404;
    path+='oops.html'
    break;
}
  fs.readFile(path,(err,data)=>{
if(err){
 // console.log(err)
  res.end(err)
}
else{
 //console.log(data)
  res.end(data)
}
  })
 

}


)
server.listen(port,hostName,()=>{
  console.log(`server is running at http://${hostName}:${port}`)})