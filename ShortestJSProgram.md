#### Shortest Program in JS

# index.js

window => global object created during global execution context

this => points to window object 

At global level, this == window 

<img width="432" height="403" alt="image" src="https://github.com/user-attachments/assets/996aef26-4f16-463f-9dc4-2b4ab5d5d25c" />



var a =10;
function b(){
 var x=10;
}

console.log(window.a); //10
console.log(a); //10
console.log(x); //Notdefined
console.log(this.a); // 10


