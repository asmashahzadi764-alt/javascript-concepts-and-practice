//var example
var studentname = "Asma Shahzadi";
console.log(studentname);

//let example
let age = 18;
console.log(age);

//const example
const university = "Women University Multan";
console.log(university);

//Scope Practice
let city = "Multan";
function showcity(){
    let area = "Katchery";
    console.log(city);
    console.log(area);
}
showcity();


//Hoisting example undefined
console.log(a);
var a = 10;

//let Hoisting(cannot access before initialization)
console.log(b);
let b = 20;
