//rest parameters

// const sum=( num1,num2)=>{
//   console.log("sum of numbers:",(num1+num2)) ;

// }
// sum(12,34,12,32);

const sum2=(num1=0,...numbers)=>{  // numbers is rest parameter
     let s=0;
     if(numbers.length >0){
        s=numbers.reduce((a,b)=>(a+b));

     }
     console.log("sum of numbers=",(num1+s));

}
sum2( 12 );