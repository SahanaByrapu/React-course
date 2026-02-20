## Async Await

**Async:**

```
// always returns a promise 
async function getData() {
  return "Namaste";
}

```
// suppose value is returned in async function, then the value is wrapped around in a promise 
and then it is returned.

```
const dataPromise= getData();
console.log(data);

dataPromise.then(res => console.log(res));
```

```
const p = new Promise((resolve, reject)=> {
resolve("Promise resolved value!!");
})

async function getData() {
  return p;
}
```

**Actual usage of Async (with Await):**

Async and Await are used to handle promises

**handling promises before async await:**
```
function getData() {
  p.then(res=>console.log(res));
}

getData();
```
**handling promises after async await:**
```
async function handlePromise()
{
   const val= await p;
   console.log(val);
}
handlePromise();
```
**await**: **can be used only in async function.**

```
await function()
{
}
// throws a syntax error
```

**Diving Deep into async await:**

```
const p = new Promise((resolve, reject)=> {
setTimeout (() => {
resolve("Promise resolved value!!");
}, 10000);
});
```

```
function getData() {
 // JS Engine will not wait for promise to be resolved, after 10 sec,
//the promise resolved value is printed automatically to the console.
  p.then(res=>console.log(res));
  console.log("Hello Javascript");
}
getData();
```
**output:**
Hello Javascript
Promise resolved value!!

**Time, Tide and JavaScript function waits for none**
As soon as getData() function is called, registers the promise and takes the callback function, 
keep it separately, then moves forward with the promise.

**With async await:**
```
async function handlePromise() {
  // JS Engine was waiting for promise  to get resolved
  const val = await p;
  console.log("Hello Javascript");
  console.log(val);
}
getData();
```
**output:** 
Hello Javascript
Promise resolved value!!

on the console, nothing is printed on to the console, 
then after 10 sec, the output us printed as above.
that means, await keyword makes the program to wait until the promise is resolved and 
then moves to the next line.

**Scenario 2**

```
async function handlePromise() {
 console.log("Hello World!");
  // JS Engine was waiting for promise to get resolved
  const val = await p;
  console.log("Hello Javascript");
  console.log(val);

}
getData();
```

**output:** 
Hello World!   //prints 
Hello Javascript //waits for 10 sec and prints the rest.
Promise resolved value!!

**Scenario 3**
```

async function handlePromise() {
 console.log("Hello World!");
  // JS Engine was waiting for promise to get resolved
  const val = await p1;
  console.log("Hello Javascript");
  console.log(val);

  const val2 = await p2;
  console.log("Hello Javascript2");
  console.log(val2);
  
}
getData();
```
**output:**
Hello World!
//waits for 10 sec, both the promises are resolved, prints the rest.
Hello Javascript 
Promise resolved value!!
Hello Javascript2
Promise resolved value!!


**Scenario 4**
```
const p1 = new Promise((resolve, reject)=> {
setTimeout (() => {
resolve("Promise1 resolved value!!");
}, 10000);
});

const p2 = new Promise((resolve, reject)=> {
setTimeout (() => {
resolve("Promise2 resolved value!!");
}, 50000);
});

async function handlePromise() {
 console.log("Hello World!");
  // JS Engine was waiting for promise to get resolved
  const val = await p1;
  console.log("Hello Javascript");
  console.log(val);

  const val2 = await p2;
  console.log("Hello Javascript2");
  console.log(val2);  
}
getData();
```
**output:**
Hello World!
//waits for 10 sec, promise2 was resolved in 5 sec,
but the rest of the lines have to wait 10 sec to get printed after promise1.
Hello Javascript 
Promise1 resolved value!!
Hello Javascript2
Promise2 resolved value!!

**Scenario 5**
```
const p1 = new Promise((resolve, reject)=> {
setTimeout (() => {
resolve("Promise1 resolved value!!");
}, 5000);
});

const p2 = new Promise((resolve, reject)=> {
setTimeout (() => {
resolve("Promise2 resolved value!!");
}, 10000);
});

async function handlePromise() {
 console.log("Hello World!");

  // JS Engine was waiting for promise to get resolved
  const val = await p1;
  console.log("Hello Javascript");
  console.log(val);

  const val2 = await p2;
  console.log("Hello Javascript2");
  console.log(val2);  
}
getData();
```
**output:**
Hello World!
//after 5 sec, promise1 was resolved in 5 sec and gets printed
Hello Javascript 
Promise1 resolved value!!
//after 10 sec, promis2 was resolved in 10 sec and gets printed
Hello Javascript2
Promise2 resolved value!!

**Behind the Scenes:**

// Async promises -p1,p2

<img width="509" height="349" alt="Screenshot 2026-02-19 at 2 03 06 PM" src="https://github.com/user-attachments/assets/2fe5a6a9-958d-4bbf-adeb-c2211f4de32f" />


**Real world example of async/await**

```
const API_URL="https://api.github.com/users/SahanaBhargavi"
async function handlePromise() {

     const data = await fetch(API_URL); // returns the promise

     // fetch() => Response.json() => jsonValue

     const jsonvalue =await data.json();

    //fetch().then(res=>res.json()).then(res=>console.log())

    console.log(jsonvalue);

}
handlePromise();
```

**Error Handling**


```
const API_URL="https://api.github.com/users/SahanaBhargavi"
async function handlePromise() {

    try{
     const data = await fetch(API_URL); 
     const jsonvalue =await data.json()
    }
   catch(err) {
    console.log(jsonvalue);
    }
}
handlePromise();
```

**Handling Actual Error**
```
const API_URL="https://invalid.github.com/users/urlabc"
async function handlePromise() {

    try{
     const data = await fetch(API_URL); 
     const jsonvalue =await data.json();
     console.log(jsonValue);
    }
   catch(err) {
    console.log(jsonvalue);
    }
}
handlePromise();
```

<img width="570" height="282" alt="image" src="https://github.com/user-attachments/assets/7df473af-e9df-47a8-acb1-177da74e17b8" />

**Older way of handling actual error**
```
const API_URL="https://invalid.github.com/users/urlabc"
async function handlePromise() {

    try{
     const data = await fetch(API_URL); 
     const jsonvalue =await data.json();
     console.log(jsonValue);
    }
}

handlePromise().catch(err => console.log(err));
```

<img width="569" height="291" alt="image" src="https://github.com/user-attachments/assets/0bb33ff1-eeaf-4274-bd97-0d7a1e3f3bae" />

**Interview Tips**

**Question: Async await? **

Start with telling Async is a keyword used for functions, Await is used only inside async functions to handle promises, then further explain about the examples and dive deep into behind the scenes.

**Async/Await Vs Promise/Catch:**

**Async/Await:** Syntactic sugar over Promise Then/Catch, JS uses normal Promise behind the scenes.
new way of writing the code, no need to deal with call backs and promise chaining.



