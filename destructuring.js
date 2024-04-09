// destructuring of array
const data=[10,20,30,40];
let [x,y,z]=data;


// for object
let studentinfo={
    name:"ravi",
    course:"mca",
    rollno:56,
}
let { name:sname, course,rollno:rno}=studentinfo;
console.log(sname,course,rno);