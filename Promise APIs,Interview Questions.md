
### Promise APIs, Interview Questions

**Scenario 1:**
```
// Handling multiple API calls ( Array of promises)
Promise.all([ p1, p2, p3 ])  // makes 3 parallel API calls and returns the result inside an array
```
Say suppose, p1 gets 3 sec, p2 gets 1 sec, p3 gets 2 sec to be fulfilled.

**wait for all of them to finish**, After 3 sec, the result will be  [ val1, val2, val3] 

**Scenario 2:**

**1.**Promise.all( [p1, p2, p3] )
Say suppose, p1 gets 3 sec, p2 gets 1 sec, p3 gets 2 sec to be fulfilled.

After 1 sec, p2 gets rejected
**As soon as any of the promise gets rejected**, the promise will throw the same ERROR**.
Immediately, As soon as the error happened, it will return the ERROR, will not wait for the success or any update of the other promises.

**2.**Promise.allSetteled([p1,p2,p3])
If all of the promises [3s,2s,1s] get successful, 
after 3 seconds [val1,val2,val3]

If p2 gets rejected in 1 sec, it will still wait for all promises to fulfill [val2, error, val3]
It will wait for 3 sec, until all the promises gets settled even if one of promises gets failed.

**3** Promise.race([p1,p2,p3])

If p1 takes 3 sec, p2 takes 1 sec, p3 takes 2 sec.

After 1 sec, returns the result p2 

Suppose, If p1 takes 3 sec, p2 takes 5sec, p3 takes 2 sec.
the value of p3 is returned first, **the value of first settled promise**

return result of first settled promise irrespective of the status of the first promise.

**4**Promise.any([p1, p2, p3])

  seeking for the first success. => [3sec, 1sec, 2sec] 

  **what if everything fails?** 
  Return result will be aggregated error [err1, err2, err3]
  List of all errors

**working example**

```
const p1=new Promise((resolve,reject) =>
{
 setTimeout(()=> resolve("P1 Success"), 3000);
})

const p2=new Promise((resolve,reject) =>
{
 //setTimeout(()=> resolve("P2 Success"), 1000);

   setTimeout(()=> reject("P2 Fail"), 1000);
})

const p3=new Promise((resolve,reject) =>
{
 //setTimeout(()=> resolve("P3 Success"), 2000);
 setTimeout(()=> reject("P3 Fail"), 2000);
})

Promise.all([p1,p2,p3]).then(res =>
{
 console.log(res);
})
.catch(err) => {
console.error(err);
});


Promise.allSettled([p1,p2,p3]).then(res =>
{
 console.log(res);
})
.catch(err) => {
console.error(err);
});

Promise.race([p1,p2,p3]).then(res =>
{
 console.log(res);
})
.catch(err) => {
console.error(err);
});

Promise.any([p1,p2,p3]).then(res =>
{
 console.log(res);
})
.catch(err) => {
console.error(err);
console.error(err.errors);//aggregated errors
});
```
**Good Practice:**
**Never ever have uncaught error, always "catch" the error because browser catches error.**























                                  


  

 
