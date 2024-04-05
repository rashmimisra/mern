//function even(num1){
//     (num1%2===0)?console.log("even"):console.log("odd");
// }
// even(40);
//+++++++++++++++++++++++++even odd using arrow function++++++++++++++


// const num=(num1)=>{
//     console.log( (num1%2===0)?"Even":"Odd"); 
// }
// num(90);

//+++++++++++++++++++leap year++++++++++++++

// const leap=(y)=>console.log(((y%4===0 && y%100!=0)||(y%400===0))?"leap year":"not a leap year");
// leap(2200);


//++++++++++++++++++++++++++++vowel or not+++++++++++++++++


// const vow=(str)=>console.log((str=='A'|| str=='E'|| str=='i'||str=='O'||str=='u')? "vowel":"not vowel");
// vow('e');


//+++++++++++++++++++++++++++++++++++++++factorial+++++++++++

// const m=(fact)=>{
//     if (fact ===0)
//     return 1;
// if(fact===1) return 1;

//     return fact*m(fact-1);
// }
// console.log(m(3));
    
//+++++++++++++++++++++fibonacci series+++++++++++++

// const n=6;
// const fib= (n)=>{
//     if(n<=1)
//     return n
//  return fib(n-1)+fib(n-2);
// }
    
// for(let i=0 ; i<n ;i++)
// {
//     let num=0;
//     num+= fib(i);
//     console.log(num);
    
// }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++pattern+++++++++++
// let n=5;
// let str='';
// for(let i=0 ; i<n;i++){
//     for(let j=0 ; j<=i;j++){
//         str+='*';
//     }
//     str+='\n';
// }
// console.log(str);

///+++++++++++++++++++++++arrray++++++++++++++
// let arr=[4,78,2,10,45,9000];
// let min= arr[0];
// for(let index of arr){
//     min= Math.min(min,index)

// }
// console.log(min);