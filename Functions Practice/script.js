//Normal Function
function Welcome(){
    console.log("Welcome Asma");
}
Welcome();

//Function with Parameters
function greet(username){
    console.log("Hello " + username);
}
greet("Asma");
greet("Iqra");
greet("Ahmad");


//Function Returning Value
function add (a,b){
    return a + b;
}
const result =add(5,3);
console.log(result);

//Anonymous Function
const message = function(){
    console.log("This message is Anonymous Function");
}
message();

//Arrow Function
const multiply = (a,b) => {
    return a * b;
}
console.log(multiply(4,5));

//Short Arrow Function
const square = number => number * number;
console.log(square(6));

//Default Parameters
function sayHi(name = "Guest"){
    console.log("Hi" + name);
}
sayHi();
sayHi("Asma");
