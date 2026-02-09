#### Java Script Engine 

**JavaScript Runtime Environment**

1. JavaScript Engine
2. Web APIs
3. Event Loop
4. Call back Queue
5. Micro Task Queue

<img width="449" height="381" alt="image" src="https://github.com/user-attachments/assets/a369d270-aa13-4f26-acb2-9b3c5f8208d6" />

**JavaScript Engine** is the heart of the JavaScript Runtime Environment

<img width="614" height="261" alt="image" src="https://github.com/user-attachments/assets/1e7de9f2-c02b-4c53-bb16-cb6c73d3218b" />

**Node.js** has opensource java script runtime environment, can run the javascript code outside the browser.

<img width="493" height="385" alt="image" src="https://github.com/user-attachments/assets/33c85c75-c51f-4da4-b853-42730ac6ebc1" />


<img width="505" height="317" alt="image" src="https://github.com/user-attachments/assets/4e6adf2a-4059-4a17-b635-bcfe634885e0" />


<img width="486" height="315" alt="image" src="https://github.com/user-attachments/assets/08c9417b-454b-4a5e-80fb-91647a145113" />


Same names for APIS might exists for browser and Node.js, but there could be implemented differently internally.


**Diving Deep into the Javascript Engine:**
Examples of JSE,
Chakra=> Microsoft edge
SpiderMonkey=> Mozilla Firefox
V8=> Google Chrome, Node.js, Deno

**Most Important Protocol** : **ECMAScript** 

**JS Engine** is NOT a Machine; its a program/code written by human, for eg, Google V8 Engine is written in C++.


#### Building JS Engine:


   **CODE**                         
-> **PARSING**       |    **TOKENS**
-> **Compilation**   |    let a=7                     |   
-> **Execution**     |

**PARSING:**
Break the tokens and convert the syntax into **AST=> Abstract Syntax Tree**

<img width="463" height="309" alt="image" src="https://github.com/user-attachments/assets/17cd0d7d-a72f-415a-99e2-722bfc6c7666" />

**astexplorer.net**
<img width="439" height="312" alt="image" src="https://github.com/user-attachments/assets/319ff851-af81-41cb-a1a0-464fe92b3d2c" />

**Compilation and Execution stage:**

**JIT** = Just In Time Compilation

**Interviewing question**

**1.Interpreter:**  Interprets the code line by line in the order, fast execution

**2.Compiler:** Compiled before executing, more efficiency

<img width="493" height="351" alt="image" src="https://github.com/user-attachments/assets/df91486b-53bd-412e-b972-e9209a044087" />

JavaScript can be Interpreter or Compiler; depends upon JavaScript Engine.

Initially, when JS was developed, the creator made it as Interpretor, generally as run on browser and the browsers cannot wait for the program to get compiled and executed.

But today's world, most of the modern browsers use a combination of Interpretor and Compiler.

Hence, **JIT** = Just In Time Compilation => Both Interpretor + COmpiler for code execution

Interpretor converts high-level code into byte code and moves the code to the execution step.

While the process is being done, Interpretor takes the help from compiler to optimize the code and 
this is not limited to single phase; but it can be expanded to multiple phases.

**JSE => AOT => Ahead Of Time** => takes piece of code and optimizes as much as it can and converts it to the byte code.

**EXECUTION:** 
**Two major components**
**1.Memory Heap :** constantly in sync with Call stack,
   Garbage Collectors (frees up the memory using **Mark&Sweep Algo**(widely used))
   **Inlining, Copy elision**
   **Inline Caching**
   
**2.Call Stack** 
 
<img width="470" height="376" alt="image" src="https://github.com/user-attachments/assets/315c2456-7776-4670-9630-927dc26aff5d" />

**Google V8 JS ENgine Architecture**

**Ignition** Interpretor
**TurboFam** Compiler

<img width="443" height="367" alt="image" src="https://github.com/user-attachments/assets/e9d7e56e-210a-49a0-bf98-2da1a36b0561" />

**Garbage Collector:** Orinico (mark and sweep algo), OilPay









