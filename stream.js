const fs=require('fs')
 const readStream=fs.createReadStream('./docs/blog.txt',{encoding:'utf-8'})
 const writeStream=fs.createWriteStream('./docs/blog8.txt')
 //readStream.on('data',(chunk)=>{
 // console.log("--NEWSTREAM---")
  //console.log(chunk)
  //writeStream.write('\n___NEW CHUNK__\n')
   // writeStream.write(chunk)

  
 readStream.pipe(writeStream)

