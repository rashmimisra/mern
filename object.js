let studentInfo={
    rollno:1,
    name:"john doe",
    course:"mca",
    college:"kiet",
    marks:[10,20,25,30],
    music:()=>console.log("hello world"),

}
let arr=[studentInfo,studentInfo,studentInfo]
// console.log(studentInfo);
// console.log(studentInfo.name);
// console.log(studentInfo.marks.forEach(marks=>console.log(marks)));
// console.log(studentInfo.music());
arr.forEach(element =>console.log(element.marks));