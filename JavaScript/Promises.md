
#### Promises

handle async operations in Javascript

Suppose in case of ecommerce website,

```
const cart = ["clothes","laptop","shoes"];

createOrder(cart); //orderId

proceedToPayment(orderId); 
```

Both createOrder(), proceedToPayment() are  synchronous operations.

### Asynchronous
Wrapping callback function inside the createOrder API

```
createOrder(cart, function(orderId) {
proceedToPayment(orderId)
});
```
// createOrder calls the callback function whenever it wants.

## there is an issue: Inversion of control; 
passing callback function to createOrder API and 
hoping further the action will be carried out by createOrder, but the situation of createOrder function 
as it is in external world, we cannot blindly trust the API.

**Promises** come to picture 

```
const promise = createOrder(cart); // async operation
```
the program continues to execute

and may be after 5,10,15 sec, the promise object will be automatically filled by createOrder API.

//returns empty object {data:undefined}

```
**promise**.then(function(orderId) {
proceedToPayment(orderId)
});
```
// control is within hands of the promise object as the promise is filled 
with the data passed by createOrder() and it will definetly calls the proceedToPayment() function as soon as
the data is received as promised by javascript.

**fetch() :** API given by browsers for external calls.

```
const GITHUB_API = "https://api.github.com/users/sahanabyrapu"

const user = fetch(GITHUB_API);

console.log(user); 

//fetch returns the promise.

```
<img width="532" height="509" alt="image" src="https://github.com/user-attachments/assets/23f4e059-84e2-4e78-99ef-6b4508ba30d4" />

<img width="532" height="453" alt="image" src="https://github.com/user-attachments/assets/ef8e4b97-f0a5-4728-b5ab-605db0d9107f" />

<img width="597" height="378" alt="image" src="https://github.com/user-attachments/assets/5cbe963f-e1bd-43f5-b1db-20cc1d2145db" />

**Three states of Promise:**
1.Pending  2.Fulfilled 3.Rejected

**Deep Dive into Promise**

When the console.log(user) is executed, the promise is under pending state;
When the JSE executes i

```
user.then (function (data) {
console.log(data);
});
```
**Interview Question**
**Promise:** 
Placeholder under certain amout of time until it receives the value from the callback function.
Object representing the eventual completion or failure of an asynchronous operation.

**Promise Chaining in JavaScript**

```
createOrder(cart, function(orderId) {
proceedToPayment(orderId)
});

showOrderSummary(paymentInfo);

updateWalletBalance();

const promise=createOrder(cart);
**promise**.then(function(orderId) {
proceedToPayment(orderId)
});

```

```
createOrder(cart, function(orderId) {
proceedToPayment(orderId, function(paymentInfo){
showOrderSummary(paymentInfo, function(){
      updateWalletBalance();
    });
  })
});

```

```
const promise=createOrder(cart);
**promise**.then(function(orderId) {
proceedToPayment(orderId)
});
```

```
createOrder(cart).then(function(orderId) {
proceedToPayment(orderId)
});
```

**Promise chaining**

```
createOrder(cart).then(function(orderId) {
return proceedToPayment(orderId)
})
.then (function(paymentInfo){
return showOrderSummary(paymentInfo, 
    })
.then(function(paymentInfo){
     return updateWalletBalance(paymentInfo)
   });
```

//does not grow horizontally, but in a meaningful chaining fashion.


**using Arrow functions**
```
createOrder(cart).then((orderId) => proceedToPayment(orderId))
.then ((paymentInfo) => showOrderSummary(paymentInfo)
.then((paymentInfo)=> updateWalletBalance(paymentInfo));

```

