// call back function
// const sum=(num1,num2)=>{
//     return "sum="+ (num1+num2);

// }
// const print=(msg)=>
// {
//     console.log(msg);

// }
// let msg=sum(10,30);
// print(msg);
// const sum=(num1,num2,print)=>{
//     let s= num1 + num2; 
//     print(s);

// }
// let print=(msg)=>{console.log(msg);}
// sum(10,20,print);

// now we have to make changes in the output without effecting the code 


const sum=(num1,num2,print)=>{
    let s= num1 + num2; 
    print(s);

}
let print=(msg)=>{console.log(msg);}

sum(10,2,(sum)=>{
    if(sum>20){
        console.log("The number is greater than 20");

    }else{
        console.log("the number is less than 20");
    }

});


