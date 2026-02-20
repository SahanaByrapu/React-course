
### setTimeout + Closures Interview question

## index.js

function x() {
    var i=1;
    
    //prints after 3 secs
    setTimeout(function(){
      console.log(i);
    }, 3000);

    console.log("Hello world!");
}
x();

**corner case**
// first prints the "Hello world!" to the console and waits for 3 secs and prints the value of i

**How setTimeout works?**
setTimeout : takes the callback function and attaches the timer, when timer expires , displays output.

function x() {
    var i=1;
    for(var i=1;i<=5;i++)
    {  
      //prints after 3 secs
      setTimeout(function(){
      console.log(i);
      }, i*1000);
    }
    
    console.log("Hello world!");
}
x();

<img width="521" height="231" alt="image" src="https://github.com/user-attachments/assets/da720f4b-4870-4f83-adea-51a28c38d70a" />

prints 6.

// all of the five call back functions [i= 1 to 5]  remembers reference to i and currently i is holding value 6.

**Solution:**
function x() {

    for(let i=1;i<=5;i++)
    {  
      //prints after 3 secs
      setTimeout(function(){
      console.log(i);
      }, i*1000);
    }
    
    console.log("Hello world!");
}
x();

when the variable is declared as "let" => block scoped, whenever new iteration is called, 
new copy of i (separate memory space ) forms with each of the closure function. 

**corner case:**
without using let, closures can be used to implement same thing.

function x() {

    for(var i=1;i<=5;i++)
    { 
      function close(i) {
          //prints after 3 secs
          setTimeout(function(){
          console.log(i);
        }, i*1000);
      }
      close(i);
    }
    
    console.log("Hello world!");
}
x();

everytime, setTimeout function is called, new copy of i is generated.

