
### Promise APIs, Interview Questions

**Scenario 1:**
// Handling multiple API calls ( Array of promises)
Promise.all([ p1, p2, p3 ])  // makes 3 parallel API calls and returns the result inside an array

Say suppose, p1 gets 3 sec, p2 gets 1 sec, p3 gets 2 sec to be fulfilled.

**wait for all of them to finish**, After 3 sec, the result will be  [ val1, val2, val3] 

**Scenario 2:**
Promise.all( [p1, p2, p3] )
Say suppose, p1 gets 3 sec, p2 gets 1 sec, p3 gets 2 sec to be fulfilled.

After 1 sec, p2 gets rejected
**As soon as any of the promise gets rejected**, **the promise will throw the same ERROR**.
Immediately, As soon as the error happened, 

                                  


  

 
