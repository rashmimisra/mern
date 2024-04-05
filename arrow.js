
const msg=()=>{
    console.log("welcome to arrow function");
}
msg();
// const msg3=()=>(console.log("welcome to arrow function") ,console.log("welcome to arrow function"));
// msg();
const sum=(num1,num2)=>console.log("mul=",(num1*num2));
sum(233,23);
const mul=(num1,num2)=>num1*num2;
console.log("multiply:",mul(10,20));

const mul2=(num1,num2)=>{
    return num1*num2;
}
console.log(mul2(5,6));