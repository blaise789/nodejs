let students=[{name:"mary",score:90, school:"East"},
{name:"james" ,score:100 ,school:"East"},
{name:"steve", score: 40 ,school:"East"},
{name:"Gabe" ,score:90, school:"West"},
{name:"Rachel" ,score:85, school:"West"},
{name:"Rochelle" ,score:95, school:"West"},
{name:"Lynette",score:75,school:"East"}
]
let processStudent=function(data,callback){
for(let i=0;i<data.length;i++){
  if(data[i].school.toLowerCase()==="East"){
    if(typeof callback==="function"){

      callback(data[i])
    }
  }
}
} 
processStudent(students, function(obj){

if(obj.score > 60){
  console.log(obj.name + " passed")
}
  
})
//let determineTotal=function(obj){
//let total=0;
//let count=0;
// processStudent(students,function(obj){
//   total=total+obj.score;
//   count++

// });
// console.log("Total score:"+ total+"-Total count:"+count)



// };
// determineTotal()