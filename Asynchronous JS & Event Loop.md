
### Asynchronous JS and Event Loop from scratch

**Java Script Engine Execution:**

<img width="447" height="387" alt="image" src="https://github.com/user-attachments/assets/125a1da3-c06f-483e-ad45-d3e46b14ae1d" />

This call stack does not have a timer.

<img width="605" height="388" alt="image" src="https://github.com/user-attachments/assets/1e2fc7a8-83a7-4450-bd5d-c90f383af71a" />


Suppose, if we need to execute a function after some delay or based on Timer,
we need some super power of timers.

#### Browser

Most Human remarkable invention


<img width="625" height="420" alt="image" src="https://github.com/user-attachments/assets/4afe09e2-ec2c-4d26-a6be-4e2cfc5c5b35" />


Components of Browser
Database
Timer
Server
Blueooth
GeoLocation


<img width="625" height="420" alt="image" src="https://github.com/user-attachments/assets/eab09146-d2b9-4ff9-9440-5f735a9b53bf" />


We need acccess to all the above components like Database, Timer, Server, Bluetooth and Geolocation etc.,

JS Engine need some action.


<img width="630" height="448" alt="image" src="https://github.com/user-attachments/assets/a7ada12c-0238-41ef-abf4-5e0ddcd2e97f" />


setTimeout(), DOM APIS, fetch(), localstorage, console.log(), location are not part of JavaScript

These are part of browser; browser gives the access to all the above features to use them in Java Script Engine.

**How to access the features?**

using "window" as global object

window.setTimeout() / setTimeout()
window.Document.getByID()
window.fetch()
window.localStorage
window.console.log()


wraps up all the features to the global object, window and to the call stack.

**Scenario-1:**

<img width="791" height="256" alt="image" src="https://github.com/user-attachments/assets/e27d96ba-6860-4c83-b495-b1b27a45dc47" />



<img width="793" height="277" alt="image" src="https://github.com/user-attachments/assets/624894cb-6e71-4ce2-ad72-20f4ed70d981" />


After code is executed, GEC is popped out of the stack.

but, here, still the timer is running and after it expires, the call back function has to be printed and it has to go to call stack.


##### Event Loop and Call back Queue:

<img width="627" height="423" alt="image" src="https://github.com/user-attachments/assets/6afeb894-805d-44b6-82d0-e8f54ee5ce2d" />

For this, Call back function goes into the call stack using **Callback Queue.**

<img width="627" height="423" alt="image" src="https://github.com/user-attachments/assets/c4a70a3d-f103-4143-acb6-f2ad29511a57" />

As soon as the timer gets expired, the call back function is pushed inside the callback queue and when eventloop finds the function in the
call back queue, it pushes inside the call stack and quickly executes the call back function.


<img width="633" height="430" alt="image" src="https://github.com/user-attachments/assets/65625afd-099e-4941-86a7-db2bb1c210f6" />


**Scenario-2:**

<img width="800" height="265" alt="image" src="https://github.com/user-attachments/assets/0be9c472-7ea1-4e9f-aad0-d2d2d0c36367" />

registers an event called click to call back method.


<img width="599" height="458" alt="image" src="https://github.com/user-attachments/assets/99098e7b-bcfb-4961-a9bd-cd4fd30a6e14" />

Global execution context gets off from the stack  

the call back function is still on the Web APIs environment and waits for the user to click on the button.

when user clicks the button, this call back method gets pushed inside the queue and gets pushed inside the queue.

**Event Loop** continously mintor the call stack and callback queue ; when it finds; pushes the call back function into the call.

quickly executes the program, 


<img width="605" height="447" alt="image" src="https://github.com/user-attachments/assets/177a24df-2210-47bd-a9c6-c06e372b2765" />

Why Call back Queue?

Event Loop can directly fetches from the Web API environment and push inside the call stack.
But, we need a Call back queue. Because, when user clicks continously 5-6 times, the call back function gets pushed
5-6 times inside the queue, all the call back functions are executed one by one.

<img width="605" height="447" alt="image" src="https://github.com/user-attachments/assets/cffcac0e-52ff-4d50-84d7-8ed2b4091b9b" />


**Scenario-3:**

**fetch("URL"):** fetch basically goes and fetch the API call and executes the call back function, once the promise is resolved, that is when it gets the data.

<img width="533" height="357" alt="image" src="https://github.com/user-attachments/assets/e7382bc4-8dcb-42cd-964a-0b8ed7a10635" />



<img width="533" height="357" alt="image" src="https://github.com/user-attachments/assets/50898513-b428-46b6-adc4-37b637a539e2" />


Both CbT and CbF are registered inside the Web API environment, CbT is getting 

<img width="644" height="225" alt="image" src="https://github.com/user-attachments/assets/466e8500-3f6f-422a-a5cb-3d27b758f91d" />
 


<img width="644" height="225" alt="image" src="https://github.com/user-attachments/assets/046976aa-6810-4b32-9d56-c9e947d83d9f" />


Suppose if the data from the servers is fetched in 50 ms, does the CbF() gets pushed into the call back Queue? 

<img width="536" height="281" alt="image" src="https://github.com/user-attachments/assets/6e394f2b-824b-4f48-989a-5169007593d0" />

No, that is not the case,  

**Microtask Queue:** stores and executes the functions that are of high priority, so CbF() goes to the micro-task queue.

<img width="520" height="362" alt="Screenshot 2026-02-08 at 10 24 14 PM" src="https://github.com/user-attachments/assets/1145c559-523e-456d-afd2-3e744077a8a7" />

after 50ms, 
<img width="471" height="362" alt="Screenshot 2026-02-08 at 10 26 23 PM" src="https://github.com/user-attachments/assets/b68fb897-2e76-47b5-ae4d-813fa075aba9" />

we are running millions of lines of code in the main thread, meanwhile 5000 sec timer gets expired, and the function CbT() is pushed inside the Call back queue.


<img width="522" height="364" alt="Screenshot 2026-02-08 at 10 29 52 PM" src="https://github.com/user-attachments/assets/f4b985a4-1c0a-4980-a192-1ac6383e8426" />


<img width="518" height="380" alt="Screenshot 2026-02-08 at 10 30 26 PM" src="https://github.com/user-attachments/assets/6ee1dd80-d1d6-4f47-a945-f69363a63f60" />

Now, Both CbF(), CbT() waiting in the Microtask Queue and Callback Queue to be get executed.

Still the program is executing the millions of lines of code and it reaches the console.log("End") and it prints "End";
Now, it has nothing to execute further, the global execution context gets popped up from the Call Stack.

Now, Event Loop checks the Microtask and Callback Queues, the CbF() function gets pushed inside the call stack as this is of high priority and gets executed;
then CbT() function gets pushed and executed.

**Console:**
Start
End
CB Netflix
CB Set Timeout

#### Interview Question

Microtask Queue is of high priority, **so what kind of tasks can appear inside the queue?**

Answer, 
**1.Promises:** All the call back functions that comes through promises will go inside **microtask queue.**

**2.Mutation Observer:** If there are any mutations in DOM tree, it can execute call back functions.

All the call back functions from setTimeOut(), DOM APIs, fetch() and console goes inside the **callback queue.**


**Scenario:**

**Starvation of Functions in Callback Queue:**
Suppose, the call back function inside the microtask queue creates another task and the task creates another task and so on.. then
the functions inside the Callback queue will never get a chance to get executed for a long time.
<img width="439" height="286" alt="image" src="https://github.com/user-attachments/assets/a04a398e-9708-423b-bf5d-1d8011cde323" />










