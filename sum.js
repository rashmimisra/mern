const sumButton=document.getElementById("sum");
// sumButton.addEventListener("click",()=>{
//     const oldData=document.getElementById("result").innerHTML;
//     document.getElementById("result").innerHTML=oldData+(2+2);
// });
sumButton.addEventListener("click",()=>{
    let num1=prompt("Enter the first number","");
    let num2=prompt("Enter the first number","");
    let result=` sum of ${num1},${num2} = ${parseInt(num1)+parseInt(num2)}`; 
    // const oldData=document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML=result;
});
