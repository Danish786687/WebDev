//Datatypes>> data ka type
//eg : 12 harsh [] {} null undefined NaN

//Primitive-> aise asare values jinko copy krna pr tumhe ek real copy mil ajye
//eg: string , number, boolean , null , undefined , symbol , bigint

// let c=10;
// let d=c;

// Refrence -> inko copy krne par real copy nhi milegi but aapko refrence milega parents kaa
 // eg: array [] , object {} , fucntions ()

// let a=[1,2,3,4];
// let b=a;
// b.pop(); // a se bhi ht jyega or b se bhi

//.........................................................................

// string:. ''= single quotes , "" = double quotes , `` = backticks
// number : integer  12, float (90.9)
// boolean: true and false
// null: ka matlb hai aapne jaan boojh kar koi value nhi diii
// eg: let a = null;

//undefined ka matlab ki aapne ek variable bnaaya aur usey value nahi dii to jo value by default mili woo hai undefined
// eg: let a;

//symbol -> unique immuatbele vallue
// future mein ham libarry use renege ab is case mein un libarryr main kai baar kuch fields hoti hai jinse similar hum bhi 
// bhi bna dete hai aur galti se hmari bnai huyi fiels us library ki original fiels ko change kr dete haii
//eg: 
// let sheryjs ={
//     uid:12,
//     model : "ahan"
// }
// sheryjs.uid=1; // change to original library code

// let u1= Symbol("uid");
// let u2 = Symbol("uid");  //both are difff..

// let obj ={
//     uid:1,
//     name:"danish",
//     age:23,
//     email: "text@text.com"
// }

// let u1 =Symbol("uid");
// obj[u1]="001";  this will also add into to the obj

//bigint

// let a =9007199254740991n;  //let a: bigint
//  a+3n;// 3 will add into a

//....................................................................

// 1.ARRAY

//  let a=[1,2,3];
//  let b=a;
//  b.pop(); // 3 will remove from both a and b

//  let a = {
//     name: " danish ",
//  }

//  let b=a;
//  b.name ="ashutosh";

// ## Dyanmic Typing: js mein static typing nahi hain and yaha pr hai dynamic
// typing jiska matlb hai aap data ko change kr skte ho kruki yaha dynamic data types  hai

// let a=12;
// a = true;
// a="danish";

// NOTE: static is better

//## types of quirks (eg: typeof null = object)

// ## type coercion (== vs ===) >> jisme ekk type automaticllly convert hojyga
5+"1"
//