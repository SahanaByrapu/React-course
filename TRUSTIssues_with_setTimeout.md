#### TRUST Issues with setTimeOut()
```
console.log("start");

setTimeout(function cb() {
  console.log("Callback");
}, 5000);

console.log("End");
```

**Scenario 1:**
Suppose we have millions of lines of code after "End" takes 10 sec to execute while the timer is still running.

**Console:**
Start
End

<img width="547" height="399" alt="image" src="https://github.com/user-attachments/assets/36f1a8ae-5fd5-47f2-b3a0-88172005bbfd" />

**GEC: Global Execution Context** cannot come out of the call stack and waits for 10 sec, little timer 
Event Loop is constantly checking if the call stack is empty or not, so that it can check the call back queue and
push the call back function inside the call stack, but the GEC is busy executing million of lines of code.

The setTimeout gets expires after the 5 sec, when the call back function get a chance to execute? 

The answer is after 10 sec; GEC moves out, Event Loop  quickly pushes the Callback function inside the call stack.

<img width="497" height="393" alt="image" src="https://github.com/user-attachments/assets/2154dd08-3e19-44e9-b57e-22261c41c75a" />

Eventually, Callback function gets printed after 10 secs.

**Scenario 1-example:**

```
console.log("start");

setTimeout(function cb() {
  console.log("Callback");
}, 5000);

console.log("End");
```
// millions of code

```
let startDate= new Date().getTime();
let endDate= startDate;
while(endDate< startDate + 10000) {
  endDate=new Date().getTime();  
}
```
console.log("while expires");


<img width="489" height="287" alt="image" src="https://github.com/user-attachments/assets/586eff40-1636-4c98-8319-abac8ed23b3d" />


**Scenario-2**
```
console.log("start");

setTimeout(function cb() {
  console.log("Callback");
}, 0);

console.log("End");
```

// Eventhough the timer is set to 'zero', the Callback function will be printed after "End". As it undergoes the
process of registering the function in the Web API and even after the timer expires, after pushed into Call back queue, waits for Event Loop  
and only when GEC gets popped out of the call stack , the Call back function gets chance to be executed.

**Console:**
Start
End
Callback



**Scenario-2**
```
console.log("start");

function cb() {
  console.log("Callback");
}
cb();

setTimeout(function cb() {
  console.log("Callback");
}, 0);

console.log("End");
```

```
console.log("start");

function cb() {
  console.log("Callback");
}


setTimeout(cb, 0);

console.log("End");
```

**Java synchronous and single threaded language**

becuase of the above concurrency model, asynchronous operations can be achieved.

**Best practices for programming play ground:**

**Best Code Editor:** VS Code

index.html
index.js
Live Server=> extension; local environment.


