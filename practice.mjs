import express from 'express'
const app=express()
const PORT =process.env.PORT||2400
import path from 'path'



app.use(express.static(path.join(__dirname,'docs',{root:__dirname})))

app.get('/index(.html)?',(req,res)=>{
  res.sendFile(path.join(__dirname,'backend','index.html'))
})
app.get('/',(req,res)=>{
  console.log(req.url)
  res.sendFile(path.join(__dirname,'backend','index.html'))
})
app.get('/old-page(.html)?',(req,res)=>{
  res.send('this is the old page with html')
})
app.listen(PORT,()=>console.log(`server running on port ${PORT}`))