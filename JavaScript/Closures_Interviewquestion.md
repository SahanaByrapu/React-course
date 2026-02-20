#### Closures Interview question

**1. What is a Closure?**

Combination of function and its lexical scope bundled together.

Each and every function in javascript has access to outer lexical environment, that means access to variables and functions that are available in their parents.

Even if the function is executed in another scope, it still remembers the outer lexical environment .

Example, (sharing my screen)

#### index.js

function outer(){

  var a =10;
  function inner()
  {
    console.log(a);
  }
 
  return inner;
}

outer(){};

var close =outer();
close();

// still prints 10 , that means remembers value of "a", even the variable declares outside.

// calling the inner function.

**corner case 1:**

function outer(){
  function inner(){
    console.log(a);
  }
  var a =10;
  return inner;
}

outer(){};
var close =outer();
close();

// still forms the closure 

**corner case 2:**

function outer(b){
  function inner(){
    console.log(a,b);
  }
  let a =10;
  return inner;
}

var close =outer("hello world");
close();

//works the same way // prints a and b values.

**corner case:3**

function outest(){
 var c=20;
  function outer(b){
    function inner(){
    console.log(a,b,c);
    }
    let a =10;
    return inner;
  }
  return outer;
}
var close =outest()("hello world");
close();

//if the outer function is nested inside the inner function.
//works the same way // prints a ,b and c values.


**corner case:4**

function outest(){
 var c=20;
  function outer(b){
    function inner(){
      console.log(a,b,c);
    }
    let a =10;
    return inner;
  }
  return outer;
}
let a=100;
var close =outest()("hello world");
close();

//when the copy of the above functions goes to close, it remembers the value "a" declared inside the function and it ignores the value a=100 declared above  the function call.
// prints 10, "Hello world", 20

**corner case:5**

function outest(){
 var c=20;
  function outer(b){
    function inner(){
      console.log(a,b,c);
    }
    //let a =10;
    return inner;
  }
  return outer;
}
let a=100;
var close =outest()("hello world");
close();

//if the function doesn't find the variable 'a' inside the local scope, then it refers to global scope and checks for declaration of 'a' variable, here, in this case, it finds 'a' as 100 and prints the same value along with b and c values.

// in-case if it doen't appear in global scope, then results in "reference error" saying 'a' is not defined.

**Advantages of Closures:**

* Module patterns
* Function currying
* Memoize, Once functions
* Data hiding and encapsulation

**Data hiding:** Data privacy to particular variable. Encapsulating the value, so that other functions cannot access the value. 
Example, 

**problem:**
var counter=0;

function incrementCounter()
{
  ++counter;
}

//major problem is anybody can access the counter and change the value. 

**solution:**


// **Datahiding:** Ensuring the value is not modified and nobody access the value.

function counter() {
 var count=0;
  return function incrementCounter() {
     count++;
     console.log(count);
  }
}

var counter1= counter()
counter1(); // 1
counter1(); // 2

var counter2= counter()
counter2(); // 1
counter2(); // 2
counter2(); // 3
counter2(); // 4

**scalable way:**

**constructor function**

function Counter() {
  var count=0;
  this.incrementCounter = function (){
    count++;
    console.log(count);
  }
  this.decrementCounter = function (){
    count--;
    console.log(count);
  }
}

var counter1= new Counter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();
counter1.decrementCounter();

**Disadvantages of Closures:**
* overconsumption of memory
* not garbage collected till the program expires.
* if not handled properly, it may lead to memory leaks, asmemory is accumulated overtime and freeze the memory.

**Garbage Collector:**
* whenever you create a function, 
* in C and C++, its upto the developers how the memory is allocated and deallocated memory.
* but, in case of high-level programming languages like Javascript, most of the work is done by java script engine.
* whenever there is unused memory, it frees up the memory when the variables are no longer needed.

**How are Garbage collections are related to Closures?**

function a() {
  var x=0;
  return  function b()
  {
    console.log(a);
  }
}
a();

// 'x' can be freed as it is not used in the function b 

function a() {
  var x=0;
  return  function b()
  {
    console.log(x);
  }
}
a();

// 'x' cannot be freed as it is  used in the function b 

Some of the modern web browsers v8 and chrome, they have **smart garbage collection mechanism**. 

**smart garbage collection mechanism** :

function a() {
  var x=0, z=100;
  return  function b()
  {
    console.log(x);
  }
}
a();

// Eventhough the variables x and z forms closure with function a(), x is returned and z is garbage collected.

// forms closure only with x 

<img width="500" height="385" alt="image" src="https://github.com/user-attachments/assets/4de6aa4a-5cdc-4386-a341-8105e3c6b71d" />



