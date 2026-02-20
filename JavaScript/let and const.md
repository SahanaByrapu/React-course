#### let and const

let and const declarations are Hoisted.

console.log(b); // can be accessed even before declaration and allocation due to hoisting
let a =10;
var b =100;

console.log(a); // throws error saying, cannot access 'a' before initialization
let a =10;
var b =100;

let a =10;
console.log(a);

When we look deep into the console, variable b is declared in global space but the variable a is defined in another private space.

The phase between hoisting and assigning value is temporal dead zone.

console.log(x); // not defined
console.log(a); // error;before initialization

let a = 10;
console.log(a);
var b=50;

In console,

window.b
50
window.a
undefined

window=> global object

this.b;
50
this.a;
undefined


//also the same variable cannot be redeclared and intialized

let a=10;
let a=100; // throws error

var b=20;
var b=30; // flexible

const b=1000 // stores in separate memory space, same temporal dead zone

let a;
const b =1000;

a=10;
console.log(a);

while in-case of const

const b;
b=1000;  // missing initialization in declaration phase 

const b=10;
b=1000; // Typeerror: Assignment to constant variable.

const b; // Syntaxerror: missing initialization in declaration phase.

let a=100;

console.log(y) //Reference error: y is not declared anywhere.

#### How to avoid temporal dead zone?

Always place declarations at the top place, as when it runs, it can immediately hit the intilization phase; allocating values.

Shrinking the temporary dead zone, avoiding unexpected errors.


