#### The Scope Chain, Scope & Lexical Environment

## index.js

function a()
{
 console.log(b);
}

var b =10;
a();

essentially, javascript execution engine first checks the declaration of b in the local context i.e., b variable in function a().
but, b is not there in function.
**Will it be print undefined or notdefined or direct value?**
but to the suprise, it prints b value as 10.

the b inside the function somehow access the value declared outside the function.

function a()
{
  function c()
  {
  console.log(b);
  }
 
}
var b =10;
a();

yes, it can still access.


function a()
{
  var b=10;
  c();
  function c()
  {
    console.log(b);
  }
}

a();
console.log(b);

<img width="552" height="419" alt="image" src="https://github.com/user-attachments/assets/5d0df756-9b6e-4327-94d4-c44ae0c2f170" />

**Lexical Space:** Pointing into parent function, in this case if global Execution context it points to null.

<img width="361" height="361" alt="image" src="https://github.com/user-attachments/assets/25bf3d65-7ee1-43d8-999f-224ad4bbee00" />

**Scope Chain:** Scope of calling lexical environment

local memory + referencing to the lexical environment of the parent.









