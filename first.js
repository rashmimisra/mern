var num=10; //global variable
let name="kiet"; // local variable
const address="muradnagar"; // similar to let but value dosen't change in case of variable
{
    name=30;
    let b=40;
    console.log("b="+b);
}
console.log(num);
console.log(name);
console.log(address);
console.log("a=",num);

