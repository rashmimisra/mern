// used for asynchronus programming 

let age=2;
const info=new Promise((resolve,reject)=>{
    if(age>18){
        resolve("you can vote");
    }else{
        reject("you can't");
    }
})
info.then(result=>console.log(result)).catch(error=>console.log(error));


const resultInfo=async ()=>{
    let result=await info;
    console.log(result);
}