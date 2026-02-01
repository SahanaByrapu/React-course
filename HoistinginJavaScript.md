#### Hoisting in JavaScript(variables & functions)

### index.js

getName();
console.log(x); //outputs undefined
console.log(getName); //printing the function 

var x=7; // if we remove this line, then we get error as 'x' is undefined.

function getName() 
{
  console.log("Hello World!");
}

console.log(getName); // outputs the function code


getName(); // outputs as undefined.

var getName = () => {
 console.log("Hello Arrow Worlds!");
}
//getName now, behaves like a variable


getName(); // outputs as undefined.

var getName= function () 
{
  console.log("Hello World!");

}

<img width="375" height="413" alt="Screenshot 2026-01-31 at 11 25 33 PM" src="https://github.com/user-attachments/assets/fa2fe9a7-cf3a-4c35-9b3f-e0f6c911b47d" />

<img width="391" height="391" alt="image" src="https://github.com/user-attachments/assets/8a34f45a-047b-4eb1-bf44-ab658262f484" />

