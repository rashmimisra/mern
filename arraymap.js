let value=[1,2,3,4,5,6,7,8,9,10];
value.push(11);
console.log(value);
value.map(item=>console.log(`value mul 10 =${item*10}`));
let sumValue=value.reduce((a,b)=>a+b);  // ais result of the values and b is increasing  value
console.log(`sum of array =${sumValue}`);
let evenValue=value.filter(item=>item%2===0);
console.log(evenValue);
