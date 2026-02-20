#### Closures

### index.js

function x(){
 var a=7;

  function y() {
    console.log(a);
  }

  y();
}
x();

**Closure**=> function bundled together with lexical scope

**// assigning function to variable**

function x(){
 var a=function y() {
    console.log(a);
  };
  y();
}
x();

**// passing function as parameter to another function**
function x(){
 var a=7;
  y();
}
x(function y() {
    console.log(a);
  });

**// returning function** 
function x(){
 var a=7;
  function y() {
    console.log(a);
  }
  return y;
}
var z = x(); // the function plus lexical scope is stored in the program.
console.log(z); //prints function y

// .......

z(); // prints 7


***//another way of returning function**
function x(){
 var a=7;
  return function y() {
    console.log(a);
  }
}
var z = x(); // the function plus lexical scope is stored in the program.
console.log(z); //prints function y
// .......
z(); 

**Corner cases**

**when variable 'a' value is changed**
function x(){
 var a=7;
  function y() {
    console.log(a); // reference of a is returned, thats why value changed from 7 to 100.
  }
  a=100;
  return y;
}
var z = x(); 
console.log(z); 

// .......

z(); // points 100


**when the function is kept inside another function**
function z() {
   var b=900;
   function x(){
        var a=7;
          function y() {
            console.log(a,b); 
           }
         y();
    }
    x();
 }
 z();

<img width="360" height="407" alt="image" src="https://github.com/user-attachments/assets/39895cb8-d1bc-42c7-9211-4f33ad7e80c4" />

**common usecases**

 * Module design pattern
 * Currying
 * Functions like 'once' (runs only once)
 * memoize
 * maintaining state in async world
 * setTimeouts
 * Iterators
 * and many more....
