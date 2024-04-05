// function msg(){
//     console.log("welcome to function");


// }
// msg();
// function sum(num1,num2){
//     let sum=num1+num2;
//     console.log(sum);
// }
// sum(10,20);
// function mul(num1,num2){
//     return num1*num2;
// }
// console.log(mul(10,20)); 


//++++++++++++++++++++++++++++++++++++++++++++++expressional function+++++++++++++++++++++++++++++++++++++++++++++++++

const msg=function message(){ /// expressional function , function assignment
    console.log("welcome to function expression");
};
msg();
const msg1=function(){ /// anonymus function
    console.log("welcome to function anonymus");
};
msg1();

const sum=function(a,b){
    
    console.log(a+b);

}
sum(10,20);
 

const mul= function(num1,num2){
    return num1*num2;
}
console.log(mul(5,7)) ;/// calling the function with parameters  