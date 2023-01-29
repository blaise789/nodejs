const express=require('express')
const app=express()
const morgan=require('morgan');
app.set('view engine', 'ejs')
app.set('views','view')//default foldeer
//there is  another folder we use this method
//app.set('views', 'myviews')
//app.render()

app.use(express.static('public'));
app.use(morgan('tiny'));
app.get('/',function(req,res)
{
  const blogs=[
    {title: 'Yoshi finds eggs',snippet:'lorem ipsum sit amet consectecteur'},
    {title: 'Boss compilation',snippet:'lorem ipsum sit amet consectecteur'},
    {title: 'shaun is a good friend',snippet:'lorem ipsum sit amet consectecteur'}

];
 // res.send("<p>hello world</p>")
res.render('index',{title:'all blogs',blogs})
})
app.get('/about',function(req,res){
  //res.send("<p> here I am with netninja</p>")
  res.render('about',{title:'about page'})
  });
  app.get('/blogs/create',(req,res)=>{
    res.render('create',{title:'create'})
  })
  
  app.use((req,res)=>{

    res.status(404) .render('404',{title:'not found'})  // it has access to the req and res obj
    //and all get method if they don't get the required url .us 
  })
  
app.listen(3000,()=>{console.log(`the server is running at port 3000`)})