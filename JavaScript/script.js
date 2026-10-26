// //  let arr = [1,2,3,4,4];
// // arr[50]   >>> undefined

// // let arr= new Array => can also create by this

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

//insert "red" and "blue" at index 1 in htis array:
// let colors=["green" , " yellow"]
// colors.splice(1,0,"red","blue")  // it will add at index 1
// console.log(colors)


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


//# spread operator(only 3 dot)
//  let arr=[1,2,3,4,5,6,7,8]
// //  let arr2=arr; // ye coopy nhi bhejta pura refrence bhejta hai jisse  arr2 me change krne s arr m chnage hoga

// let arr2=[...arr]; // spread operator => copy aajayegi dsari

// console.log(arr2)
// arr2.pop()
// console.log(arr2)
// console.log(arr)


//...................................................
//question

//  let fruits=["apple" , "mango" , "papapya"]
// // console.log(fruits[1])

// fruits.push("Pineapple")
// fruits.unshift("oranage")  // add at first
// console.log(fruits)


// let arr=[1,2,3,4,5,5]
// arr.pop()
// console.log(arr)

//insert "red" and "blue" at index 1 in htis array:
// let colors=["green" , " yellow"]
// colors.splice(1,0,"red","blue")  // it will add at index 1
// console.log(colors)


//sort and reverse
// let names=["zara","arjun","mira","bhavya"]
// names.sort()
// console.log(names)   //[ 'arjun', 'bhavya', 'mira', 'zara' ]
// names.sort().reverse();
// console.log(names) //[ 'zara', 'mira', 'bhavya', 'arjun' ]

// let arr=[1,2,3,4,5,6,7]
// let newarr= arr.map(function(val){
//     return val*val;
// })
// console.log(newarr)

// let arr=[1,2,3,4,5,6,3,7,23,323,32324545,545,32,676]
// let ans=arr.filter(function(val){
//     if(val>10) return val;
// })
// console.log(ans)  //[ 23, 323, 32324545, 545, 32, 676 ]

// by fat arrow function
// let arr=[1,2,3,4,5,6,3,7,23,323,32324545,545,32,676]
// let ans=arr.filter((val)=>{
//     return val>10
// })
// console.log(ans)  //[ 23, 323, 32324545, 545, 32, 676 ]

// let arr=[20,30,10]
// let sum=arr.reduce(function(accumulator,val){
//     return accumulator + val;
// }, 0);
// console.log("sum of array:",sum)  //sum of array: 60


///first no. less than 10
// let arr=[12,15,3,8,20]
// let ans=arr.find(function(val){ 
//     // if(val<10) return val;   //or by this mwthod
//     return val<10;
// })
// console.log(ans)  //3

// let arr=[23,54,89,22,89]
// let ans=arr.some(function(val){
//     if(val<35) return val;    //some and every => true and false
//     // return val<35;    // by this way also
// })
// console.log(ans)

// let arr=[2,4,6,8,10]
// let ans= arr.every(function(val){
//     return val%2==0;
// })
// console.log(ans)  //true

// let fullname=["harsh" ,"sharma"]
// let [fname,lname] = fullname;  //destructure
// console.log(fname,lname)

//merge operator
// let a=[1,2,3,4]
// let b=[5,6,7]
// let c=[...a, ...b]
// console.log(c)  //[1,2,3,4,5,6,7]

//spread opeartor
// let countries=["UK","USA","NEPAL"];
// let b =["INDIA"] 
// countries=["INDIA", ...countries];  //[ 'INDIA', 'UK', 'USA', 'NEPAL' ]

// countries=[b, ...countries];  //[ [ 'INDIA' ], 'UK', 'USA', 'NEPAL' ]
// console.log(countries)

// let arr=[1,2,3,4]
// let ans=[...arr];
// console.log(ans);  // copy but not refrence wise

let arr=[7,3,4,2,6,1,454,322,43]
arr.sort(function(a,b){
    return b-a;
})
console.log(arr)