**Execution Context**

|**Variable Environment**| **Thread of Execution** |
|----------------|-----------|
| **Memory** | **Code** |
|------------|-------------|
| Key:value  |  *---- |
| a:10       |  *---- |
| fn:{..}    |  *----- |

JavaScript is a **synchronous single-threaded** language.
that means, JavaScript can execute single command at a time at a specific order.

**AJAX : Asynchronous Java Script**

**What happens when you run JavaScript code?**

Everything in JavaScript happens inside  the **Execution context.** 

Consider below example of code:

var n =2;  //Allocates memory to variable 'n'
function square (num){
var ans = num * num;
return ans;
}

var square2 = square(n);
var square4 = square(4);

when the above code is run, 

| **Memory** | **Code** |
|------------| -------------------|
| **Phase 1**     |               |
| n: undefined |                  |
| square:{} |                     |
| square2:undefined |             |
| square4:undefined |             |
|------------------|------------  |
|**Phase 2**    |                 |
| n: 2 |                          |
| square:{} |                     |
| square2:undefined |             |
| square4:undefined |             |
| ----------------  |             |

<img width="429" height="375" alt="image" src="https://github.com/user-attachments/assets/0604d57d-21ae-45d3-a806-9fc9cdfc5cfb" />

**Phase 1: Memory allocation**, allocating variables with undefined values 
**Phase 2: Code execution**, javascript code is executed line by line, and replaces the undefined values with the initialized values.

Once the java script code ends, the whole global execution context also deletes;

**Call Stack:**

The global execution context is pushed into the Call Stack. whenever the function is invoked, the new execution context is pushed into Call Stack.

<img width="429" height="375" alt="image" src="https://github.com/user-attachments/assets/7b63d8b5-6af1-4336-af12-47c43730935e" />

When the execution E1 is done, its popped out of the stack and control goes back to Global Execution Context, similarly prcedure is followed for the new execution context for E2.

Call stack maintains the **order of execution** of execution contexts.

Various names for the Call stack:
1. Execution Context Stack.
2. Program Stack
3. Control Stack
4. Runtime Stack
5. Machine Stack

















