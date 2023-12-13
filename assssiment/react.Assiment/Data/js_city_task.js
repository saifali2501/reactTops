let dataa = require("./data.json");

let pro = require("./product.json");

// function cityByState(state) {
//   let matchData = dataa.filter((e) => {
//     return e?.state_name === state && e.city.length > 5;
//   });

//   let filterCity=matchData.map((e) => {
//     return e.city;  
//   });
//   console.log("filterCity:", filterCity)

  
 
// }

// cityByState("Delhi")

// function fun1(user) {
//   let a = dataa.filter((e) =>{
//     return e.state_name === user;
//   })
//   let b = a.map((e) =>{
//      return e.population
//   })
//    let sor = b.sort();

//    return sor

// }

// let pt = fun1("Delhi")
// console.log("pt",pt);

// function fun1(user) { 
//   let first = dataa.filter((e) =>{
//      return e.state_name === user;
//   })
//    first.sort(function(a,b){
//     return a.population - b.population
//   })
//   let second = first.map((e) =>{
//     return e.population;
//   })
//   let kk = second.slice(0,6)
//    return kk;
// }


// let final = fun1("Delhi")
// console.log("final",final);

//   function fun2(user1) {

// let fir = dataa.filter((e) =>{
//   return e.state_name === user1;
// })
// fir.sort(function(a,b){
//  return a.population - b.population
// })
// let sec = fir.map((e) =>{
//  return e.population;
// })
// let tt = sec.slice(0,5)
// return tt;
//   }
// }
// let ddd = fun1("Delhi","Mahārāshtra")
// console.log("dhehe",ddd);

// class Userr{
//   constructor(){
//     console.log("-------------------");
//   }
//    fun1(user) { 
//       let first = dataa.filter((e) =>{
//          return e.state_name === user;
//       })
//        first.sort(function(a,b){
//         return b.population - a.population
//       })
//       let second = first.map((e) =>{
//         return e.population;
//       })
//       let kk = second.slice(0,5)
//       return kk;
    
// }
// }

// const class1 = new Userr()
// console.log(" class1:", class1)

// class1.fun1("Delhi")

// // console.log(" class1:", class1)
// // console.log(" class1:", class2)
// // class1.print()
// // class1.print2()

// class userr{
//     fun1(user) { 
//         let first = dataa.filter((e) =>{
//            return e.state_name === user;
//         })
//          first.sort(function(a,b){
//           return b.population - a.population
//         })
//         let second = first.map((e) =>{
//           return e.population;
//         })
//         let kk = second.slice(0,5)
//         return kk;
      
//   }
  
// }
// class teacher extends userr{
//     salary(){
//         console.log("----------------");
//     }
// }
// const ab = new teacher()
// ab.fun1("Delhi")
// ab.salary()
// ==================================

// function fun1(){
//   let first = pro.filter((e) =>{
//     return e.category[2] == "4g" 

//   })
//   let second = first.map((e) =>{
//          return e.title;
//   })
//     // let exe = [];

//     // second.forEach((e)=>{
//     //   if(e !== undefined){
//     //     exe.push(e)
//     //   }
//     // })
  
//   return second
// }
// let a = fun1()
// console.log("----",a);

// ===============================
// =====================================
// function fun1(statename) {
//   let match = dataa.filter((e) =>{
//     return e.state_name === statename;
//   })
//   let abc = match.map((e) =>{
//     return e.city
//   })
//   return abc
// }
// let finaly = fun1("West Bengal")
// console.log(" finaly:", finaly)
// ==================================

function fun1(user){
  let state = dataa.filter((e) =>{
      return e.state_name === user;
  });
  let total = 0;
   state.map((e) =>{
    total += +e.population
  })
  return total
}

let final = fun1("Mahārāshtra")
console.log("=========",final);