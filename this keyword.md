### this keyword in JavaScript

**//this in global space**

```
console.log(this) //globalObject //prints "window" object, value is global
```

**//this inside a function**

```
function x(){
// the value depends on strict / non strict mode
console.log(this); // prints "window", value is "undefined"
}
x();
```
**Remember:**
****// this in non-strict mode - (this substitution)**

**// If the value of this is undefined or null**
**// this keyword will be replaced with window-globalObject**
**// only in non strict mode**

**// this keyword value depends on how this function is called (window)**

**use strict**

x();  // value is "undefined" // called without any reference
window.x(); // value becomes "window" 

**// this inside a object's method**

```
const obj = {
    a:10,
    x: function () {
       console.log(this); // {a:10,x:f}
      }
 }

obj.x();

```

**call, apply, bind methods (sharing methods)**


```
const  student ={
  name:"Sahana",
  printName: function () {
     console.log(this.name); //prints Sahana
   },
};

const  student2 ={
  name:"Bhargavi",
};

student.printName();
student2.printName(); // throws error

student.printName.call(student2) // value of 'this' becomes student2 // prints :Bhargavi

```

**enclosing lexical context**
```
const obj = {
  a:20;
  x:function () {
      console.log(this);
  }
};
obj.x(); // {a:10, x:f}
```

// appears as the object present in global space
console.log(this);
 
```
const obj = {
  a:10;
  x: () => {
      console.log(this);
  }, 
};
obj.x(); //window object
```

// this inside an arrow function

```
const obj = {
  a:10;
  x:function () {
     //enclosing lexical context
      const y= () => {
      console.log(this);
  };
  y();
 },
};
obj.x(); //object
```

whenever 'this' is declared inside an arrow function , 
arrows function dont provide their own binding and
then value of 'this' will be where is arrow function is lexically enclosed.

```
const obj = {
  a:10;
  x:function () {
    console.log(this); //object
      //const y= () => {
      //console.log(this);
  //};
  //y();
 },
};
obj.x(); 
```
**this keyword in DOM**

```
<html>
  <head>
    
  </head>
  <body>
     <h1>Hello JavaScript!</h1>
      <button onclick="alert(this)">Click Me</button>
      <button onclick="alert(this.tagName)">Click Me also!</button>
      <script src="./index.js"> </script>
  </body>
</html>
```
//this value will be [ objectHTMLButtonElement ]


// this inside DOM elemet => reference to the HTML element.

//**this inside class, constructor **



