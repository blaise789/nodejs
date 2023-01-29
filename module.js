//const {people,ages}=require('./people')//import file
//console.log({people,ages}
  // )
  //const os=require('os')
// console.log(os.platform(),os.homedir())
// const fs=require('fs')
// {
//   fs.readFile('./docs/back1.txt',(err,may)=>{
//     if(err){console.log(err)}
//     else {
//       console.log(may.toString())
//     }

//const { existsSync } = require("fs");

    
//   })

  
// }
// console.log("last line")  
//const fs=require('fs')



// fs.writeFile('./docs/back.txt','hello again',()=>{

//   console.log("call back was fired")
// })
// fs.writeFile('./docs/blog.txt','bigirabagabo blaise',()=>{
//   console.log("new file is created")
// })
// if(!fs.existsSync('./blog')){
// fs.mkdir("./blog",(err)=>{
//   if(err){
//     console.log(err)
//   }
//   else{

// console.log("the folder was created") }
// })}
// else{
//   fs.rmdir('./blog',(err)=>{
//     if(err){
//       console.log(err)
//     }
//     else{
// console.log("foder was deleted")
// }
//   })
// }
const fs=require('fs')
if(fs.existsSync('./docs/file.txt')){
  fs.unlink('./docs/file.txt',(err)=>{
    if(err){
    
    
    console.log(err)}
    else{
      
      console.log("file deleted")}
  })
  

}
else{
fs.writeFile('./docs/file.txt',"",(err)=>{
  if(err)
  {
    console.log(err)}
    else{
      console.log('file is created')
    }
})
}