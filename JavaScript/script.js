// obejct
// let object_name={
//     key:"value"
// }
// eg:
// let obj = {
//     name: "danish", 
//     age: 90,
//     food: "biryani"
// };

// dot(.) operator use to accesss the object element
// in dot opeartor after the dot the var_nam must preseent in obj
// console.log(obj.name) // danish
// console.log(obj.age) //90
// console.log(obj.food)// biryani

//by this method also can access
// console.log(obj['name'])  // danish  //only chngae the name and search


//#NESTING AND DEEP ACCESS
// const user = {
//     name: "danish", 
//     address: {
//         city:"azm",
//         pin:276138,
//         location :{
//             lat:23.3,
//             lng:43.3
//         },
//     },
// };

//to access the lng(deep access)
// console.log(user.address.location.lng)  //43.3
//NOte:// console.log(user.address.locationsss.lng)  //error generated but it show in lng but it before the lng ok!!

//destrucutring
// let {lat,lng}= user.address.location;  // short form to access easily later by var nam

// console.log(lng)
// console.log(lat)

//LOOPING:
//  let obj = {
//     name: " danish",
//     age: 24,
//     email: "dnaish1231@gmail.com"
//  };

//  for( let key in obj){
//     // console.log(key)  //name age email   obj.key will error because no anyname of key var avaiable
//     console.log(key,":",obj[key])  // it will show value
//  }

//# Object.keys(obj) => give array of keys
// console.log(Object.keys(obj))  //[ 'name', 'age', 'email' ]

//Object.entries(obj) => arrays of array  == key or value ka ek list orr phir ka list
// console.log(Object.entries(obj))


//copying object
// let obj = {
//     name: " danish",
//     age: 24,
//     email: "dnaish1231@gmail.com"
//  };

//  let obj2={...obj};  //copying object  //spread opeartor

 //object.assign(notimp)

//  let obj2=Object.assign({},obj);  //copy same as copying object  we can add by delivering parameter in the assign

//DEEP CLONE
//solving problem of: jb nested object rhta hai too nesting ka sara element
// as a refrence pass hota hai chahe aap spread operator se copy..jiski
//wjh se copy wale me changes(nested elemnts me) krne se original me changes hone lgta hai 
//solution is deep clone
//eg:

// let obj ={
//     name: " danish",
//     age:20,
//     email:"danish@gmail.com",  //till here only copy pass
//     address:{
//         city:"azm",       // it will pass as refrence
//     },
// };
// let obj2 = {...obj};
// console.log(obj)
// console.log(obj2)
// obj2.address.city="mumbai";
// console.log(obj)
// console.log(obj2)

//how it can solve?
//changing the ofull object into string by JSON.stringify(obj)
// JSON.parse convert back into the origignal object

// let obj ={
//     name: " danish",
//     age:20,
//     email:"danish@gmail.com", 
//     address:{
//         city:"azm",       
//     },
// };

// let obj2=JSON.parse(JSON.stringify(obj));  //copying when object is in nested
// console.log(obj) 
// console.log(obj2)
// obj2.address.city="MUMBAI";
// console.log(obj)   //city will be azm
// console.log(obj2)  // city will be MUMBAI


//#OPTIONAL CHAINIG (?.)

//if any one change the obj_var name later and access by their org name
// and not found then it give error so to handle error we use that
// let obj ={
//     name: " danish",
//     age:20,
//     email:"danish@gmail.com", 
//     addressss:{
//         city:"azm",       
//     },
// };

// console.log(obj?.address?.city)  //undefined   as address is not defined in obj


//#COMPUTER PROPERTIES

// let role="admin";

// let obj ={
//     name: " danish",
//     age:20,
//     email:"danish@gmail.com", 
//     addressss:{
//         city:"azm",       
//     },
//     [role]: "ADITYA",    // adding object named admin: "adtiya"
// };
// console.log(obj)

//op...
// {
//   name: ' danish',
//   age: 20,
//   email: 'danish@gmail.com',
//   addressss: { city: 'azm' },
//   admin: 'ADITYA'
// }

//...............................................
//prac...

// let student ={
//     name:"danish",
//     age:29,
//     isEnrolled: true,
// }
// console.log(student)


//can object key be a number or boolean ? yess
// const obj={
//     true: "yes",
//     42:"asnwnej",
// }
// console.log(obj)   //{ '42': 'asnwnej', true: 'yes' }

//destrucut the key "first-name" as a varibale called firstname

// const user={
//     "first-name":"danish",
// }
// let { "first-name" : firstname} =user  // here variable name is firstname

// console.log(firstname)   //danish

// let obj ={
//     name: " danish",
//     age:20,
//     email:"danish@gmail.com", 

// };
// // for(let key in obj){
// //     console.log(key,":",obj[key])
// // }

// Object.entries(obj).forEach(function(val){
//     console.log(val[0] + " : " + val[1]);
// })

//op..
// name :  danish
// age : 20
// email : danish@gmail.com

const obj1= { info :{score : 80}}
// const clone = {...obj1}   //refrence pass here
// clone.info.score =100;
// console.log(obj1.info.score)  //100 

let clone = JSON.parse(JSON.stringify(obj1))  // deep clone
clone.info.score =100;
console.log(obj1)
console.log(clone) 
