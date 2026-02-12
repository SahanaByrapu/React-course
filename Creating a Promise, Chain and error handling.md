### Creating a Promise, Chain and error handling

```
const cart=["clothes","mobile", "shoes"]

const promise=createOrder(cart); //orderId  


promise.then (function (orderId){
  console.log(orderId);
  //proceedToPayment(cart);
});

```

// Producer 

### Creating a Promise
```
function createOrder(cart) {

  const pr= new Promise(function(resolve,reject){
    // createOrder
    // validateCart
    // orderId
  
    if(!validateCart(cart)) {
       const err=new Error("Cart is not valid");
       reject(err);
    }
    
    // logic for createOrder
    
    // const orderId = DBcall.getOrderId();
    
    const orderId = 12345;
    if(orderId){
     setTimeout( function() {
           resolve(orderId);
              }, 5000 );
      }  
     });
  
  return pr;
}

function validateCart(cart) 
{
  return true;
}

```

**Scenario1:**

```
console.log(promise);

```
<img width="619" height="350" alt="image" src="https://github.com/user-attachments/assets/697910cf-6e3d-43d2-ab2e-b753126bf504" />

Promise initially in pending stage, after 5 sec order-ID is printed.

**Scenario2:**

errors should be handled gracefully, whenever code is written.

<img width="622" height="297" alt="image" src="https://github.com/user-attachments/assets/19deec81-c5e4-4424-815b-0231111f8e39" />

```
const promise=createOrder(cart); //orderId  

promise
.then (function (orderId){
  console.log(orderId);
    })
.catch(function (err) {
  console.log(err.message);
})

```

**Promise Chaining**

```
const cart=["clothes","mobile", "shoes"];


createOrder(cart)
.then (function (orderId){
  console.log(orderId);
  return orderId;
 }) 
.then(function(orderId){
  return proceedToPayment(orderId).then(function(paymentInfo){
    console.log(paymentInfo);
  });
})

// Avoiding promis hell back
.then(function(orderId){
  return proceedToPayment(orderId));
})
.then(function(paymentInfo){
    console.log(paymentInfo);
  }
.catch(function (err) {
  console.log(err.message);
});

function createOrder(cart){
  
}

function proceedToPayment(orderId){
  // <summary>
  return new Promise(function(resolve,reject){
       resolve("Payment Successful");
    });
}

function validateCart(cart) 
{
  return true;
}

```

