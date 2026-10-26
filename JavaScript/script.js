// //  let arr = [1,2,3,4,4];
// // arr[50]   >>> undefined

// // let arr= new Array  can also create by this

// //modify array 
// // arr[3]=300
// // console.log(arr)

// //ARRAY METHOD  >>> arr.method()

// let arr=[1,2,3,4,5,6]
// arr.push(999)
// console.log(arr)
// arr.pop()
// console.log(arr)

// //remove elemnt from the starting >> shift
// arr.shift();
// console.log(arr)

// //add element at the starting >> unshift
// arr.unshift(0)
// console.log(arr)

// //remove ekement from in between element>>> splice(index,kitnivalue htani hn)
// // it change the actual array
// arr.splice(2,1)
// console.log(arr)
// // arr.splice(2)  // remove all element after the index 2
// console.log(arr)
// console.log(arr.splice(2,2))  // which elelemnt will remove

//give array of if we delete from between in arr form >> slice(index_start,index_end)  index_end not count
//slice(index_start,index_end) end not count

// let arr=[1,2,3,4,5,6,7]
// let newarr= arr.slice(0,3)
// console.log(newarr)

// //reverse() >> chnage the actual array in reverse order

// arr.reverse()
// console.log(arr) [7, 6, 5, 4,3, 2, 1]
  

//#sort >> hmesha function accept krta hai
//  return a-b;  >> for ascending order
// return b-arr;  >> for descending order
// let arr=[23,34,1,3,54,26]
// arr.sort(function(a,b){
//     return b-a;

// })
// console.log(arr)

// NOTE: sort(),map , filter,reduce sb function accept krte hai

//forEach>>> hr ek element ke liye fucntion ko chalte hai
// let arr=[23,34,1,3,54,26]
// arr.forEach(function(val){
//     console.log(val)
// });

//adding +5 to each element
// let arr=[23,34,1,3,54,26]
// arr.forEach(function(val){
//     console.log(val+5)
// });


//#map>> map sirf tb use krna hai jab aapko new array bnaana hai
//pichle array ke data k basis par
//no. of element in old arr = no. of element in new arr by map

//map dikhte hi sath mn m blank arr bnao newarr=[]
// let arr=[23,34,1,3,54,26]
// arr.forEach(function(val){
//     console.log(val)
// });

// newarr=arr.map(function(val){
//     return 12; //sbme 12 aayga  // return krna mandotory hain...agr kuch return nhi to undefined aayga..
//     return val;  //sari purani arr ki value aaygi?
// });
// console.log(newarr)

// newarr=arr.map(function(val){
//     if(val>30) return val;
// })
// console.log(newarr)


//note://jab aapko aapko koi aisa  acase dikh jaye jahha par  ek aaraya s new arr bnega and wo naya array kuch values ko rkehaga tab map krega..


//#filter >. same as map syntax
// either return >> true or false
// return true  => val wali value new arr m jygi tb
// return false  => val wali value new arr m  nhi jygi tb

// let arr=[1,2,3,4,5,6,7,8]

// let newarr=arr.filter(function(val){
//     if(val>4) return true;
// })
// console.log(newarr)  //[ 5, 6, 7, 8 ]


//#reduce  ==> give one value from the whole array like sum of whole array
// let arr=[1,2,3,4,5,6,7,8]
// let ans = arr.reduce(function(accumulator ,val){
//     return accumulator + val;   // return hone k baad accumlator me save hoga or new value assign hgi accumulator mee after 1 iteraton
// } , 0);  // here 0 is value of accumulator

// console.log(ans)

//#find => return krta hai jiski value phile aayi rhti hai condition k hisab see
// let arr=[1,2,3,3,1,4,5,6,7,8]
//  let va= arr.find(function (val){
//     return val===1;
//  })
// console.log(va)


//#some  =>> if any value condtion satisfy krdegi tb true return otherwise false
// let marks=[40,30,87,54,65,90]
// let ans= marks.some(function(val){
//     return val>80
// })
// console.log(ans)

//#every()  => some ka just ulta  ,,,, return true or false
// sare element condtion ko satisfy krhe yaa nhi

// let marks=[40,30,87,54,65,90]
// let ans=marks.every(function( val) {
//     return val>10;  //true
// })
// console.log(ans)

//#destructuing
// let arr=[1,2,3,4,5,6,7]
// let [a,b,,d]=arr;
// console.log(a,b,d) //1 2 4


//# spread operator
 let arr=[1,2,3,4,5,6,7,8]
//  let arr2=arr; // ye coopy nhi bhejta pura refrence bhejta hai jisse  arr2 me change krne s arr m chnage hoga

let arr2=[...arr]; // spread operator => copy aajayegi dsari

console.log(arr2)
arr2.pop()
console.log(arr2)
console.log(arr)