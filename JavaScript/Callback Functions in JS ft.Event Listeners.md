### Callback Functions in JS ft. Event Listeners

```
setTimeout(function ()
{console.log("timer")
},5000);

function x(y) {
console.log("x");
}

x ( function y() {
console.log("y");
} )
```
**Call back function:** Passing one function into another function.

<img width="457" height="334" alt="image" src="https://github.com/user-attachments/assets/5bcf197c-0a02-4ed9-9ee5-d2e4545e1b4f" />

Using the web APIs  (like setTimeOut()) and the callback functions, asynchronization operations can be happened.

### JavaScript is a synchronous and single-threaded language

#### in index.html

<button id="clickMe"> Click me </button>

#### in index.js
```
function attachEventListeners()
{
  let count=0;
  document.getElementById("clickMe")
 .addEventListener("click", function xyz(){
  console.log("button clicked", ++count);
  });
}

attachEventListeners();
```

<img width="515" height="356" alt="image" src="https://github.com/user-attachments/assets/bf7ce6a4-0c95-4e94-b1da-3d646d9dd912" />


### Interview question
##### Garbage collection

Event listeners are heavy and takes memory, whenever the event listeners are attached,it forms a closure  with the say here, with the variable "count", and even when the call stack is empty and the code is not executing, the program is not freeing up the memory. that is cannot free the memory for the "count" variable, as we never know who can visit the page and click the button, hence we need this closure and the we cannot free space.

thousands of buttons, thousands of event listeners attached , there are lot of scopes attached and the page can go slow 

hence, the good practice is to remove the event listeners and make them garbage collected.


