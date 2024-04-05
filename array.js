const arr=()=>console.log(13)
let data=[10,20,30,40,50,60 ,60.45,"rashmi",arr];
console.log(data);
console.log(typeof data);
data[8]();
// for(let i=0;i<data.length;i++){
//     console.log(`value of ${i} is ${data[i]}`);
// }
// for(let index in data){
//     console.log(`value in ${index} is ${data[index]}`);
// }
// for(let value of data){
//     console.log(`value of array= ${value}`);
// }
data.forEach(value=>console.log(`value of array ${value}`)) ; // forEach is faster than other for loops 