function nameformat (name){
    return name.trim().toUpperCase();
}
console.log(nameformat("shree"));
console.log(nameformat("nithiya.k"));  //-------resuable func



function square(n) {
  return n * n;
}

let nums = [10, 20, 30];
for (let n of nums) {
  console.log(square(n));
}   //------------------replace code func


//<button> onvlick="sayHello()"> click me </button>
function sayHello(){
    console.log(sayHello);
} 
  sayHello="hello from the button!"; //--------html button function


function add(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function mul(a, b) { return a * b; }
function div(a, b) { return a / b; }

console.log(add(5, 3));
console.log(sub(10, 4));
console.log(mul(7, 6));
console.log(div(20, 5)); //--------modular calculator

const greet = (name) => `Hello, ${name}!`;

console.log(greet("Shree")); //---------Arrow function

