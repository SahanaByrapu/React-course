

### Function Statement aka Function Declaration

function a() {
  console.log("a called");
}

a();

### Function Expression 

```
var b = function () {
 console.log("b called");
}
b();

```


**Major difference is hoisting:**


```
 a();
b();

function a() {
  console.log("a called");
}

var b = function () {
 console.log("b called");
}
```

**CornerCase:** 
 During the hoisting phase, (memory creation), memory is created for 'a' and assigned with the copy of function.
 In-case of function expression, the variable 'b' is created like for any other variable,
  and, is assigned 'undefined' intially , until it hits the function code.

Hence, we get Typeerror: b is not a funcdtion, when we call b() before excuting the function code for 'b'.

### Anonymous Function

```
function() {

}
```

does not have any identity
<img width="358" height="220" alt="image" src="https://github.com/user-attachments/assets/07a306c4-9c4f-4fc0-a8d1-43ca68d3afd8" />

**scope:** when the functions are used as values.

### Named Function Expression
```
var b = function xyz() {
 console.log("b called");
 console.log(xyz);
}
a();
b();
xyz();
```

<img width="358" height="220" alt="image" src="https://github.com/user-attachments/assets/7fb30892-f290-4fd7-9782-82a8d309e160" />

<img width="534" height="355" alt="image" src="https://github.com/user-attachments/assets/619db045-f83b-4892-aaec-f7d707837857" />

### Difference between Parameters and Arguments

```
function a() {
  console.log("a called");
}

//parameters
var b = function (param1, param2) {
 console.log("b called");
}

a();
b(1,2); // arguments 
```
### First Class Functions

```
var b = function(param1) {
  return function xyz()
  {
  
  }

}

console.log(b());
```

* The ability to use functions as values and assigned to variable; 
passed this as an argument to another function.
(or) returned out of another function; 

* Functions are First Class Citizens

### Arrow Functions








