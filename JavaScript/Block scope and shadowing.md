#### Block scope and shadowing in java script

**What is Block Scope?**

{
  
  //Compound Statement
  var a=10;
  console.log(a);
  
}

// grouping multiple statements together so that javascript expects for single statement.

if(true) 
{
  
  //Compound Statement
  var a=10;
  console.log(a);
  
}

#### Block scope

if(true) 
{
  
  //Compound Statement
  var a=10;
  let b=20;
  const c=30;
  console.log(a);
  console.log(b);
  console.log(c);
  
}

  console.log(a);//10
  console.log(b);//error: notdefined
  console.log(c);

### Shadowing
var a=30;
{
 var a=10;
  let b=20;
  const c=30;
  console.log(a);//10 // shadowed outside a
  console.log(b);
  console.log(c);
  }
console.log(a);//10 // shadowed and modified a


let b=300;
{
 var a=10;
  let b=20;
  const c=30;
  console.log(a);//10 // shadowed outside b
  console.log(b);
  console.log(c);
  }
console.log(b);//300 // shadowed and modified b

const c=100;
{
 var a=10;
  let b=20;
  const c=30;
  console.log(a);//10 // shadowed outside c
  console.log(b);//20
  console.log(c);//30
  }
console.log(c);//100 // shadowed and modified c

### Not only limited to Blocks, shadowing occurs in functions also

const c=100;
function x() {
  const c=30;
  console.log(c);
}

x();
console.log(c);

### Illegal shadowing
let a =20;
{
var a =20; //functional scope
}

// SyntaxError: whenever a variable is shadowed, the boundaries shouldn't be crossed.

let a=20;
function x() {
  let a=20;

}

let a=20;
function x() {
  var a=20;
  
}

const a=20;
function x() {
  const a=20;
  
}

//Shadowing is legal

var a=20;
function x() {
  let a=20;
  
}

// Block scope also follows lexical scoping

const a=20;
{
  const a=100;
  {
    const a=200;
    console.log(a); //200
  }
   console.log(a); 
}


// Applies for Arrow functions as well.





