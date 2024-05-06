
let data = 
  {
    name:"saif",
    marksheet:[
      {
        subject:"english",
        marks:95,
      },
      {
        subject:"maths",
        marks:85,
      },
      {
        subject:"science",
        marks:85,
      },
    ]
  }

let total = 0;
data.marksheet.map((e)=>{
    total = total + e.marks;

    
})