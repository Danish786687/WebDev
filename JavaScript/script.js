// let multiply= (a,b)=>{
//     return a*b
// }

// function f(){
//     return
// }
// console.log(f())

// function abcd(Val){
//     Val();
// }

// abcd(function () {
//     console.log("hellooo");
// });


// //bmi calculator
// function bmi(weight , height){
//     return weight/ (height*height)
// }

// console.log(bmi(60,1.8).toFixed(2))


function discountcalculator(discount){
    return function (price){
        return price -price *(discount/100);
    };
}

let ten= discountcalculator(10);  //10%discount
let twenty= discountcalculator(20);  //20%discount

console.log(ten(1200));
console.log(twenty(1200));  //price