
### Call back Hell 

**Example1**
```
console.log("hello");

setTimeout(function () {
console.log("beautiful");
},5000)

console.log("world");
```

**Example2**

```
 const cart = ["shoes","pants","belts"];
 
 api.createOrder(cart, function () {
   api.proceedToPayment(function() { 
       api.showOrderSummary(function() {
                  api.updateWallet() 
            })        
       })
 })
```

**Callbackhell:** code grows horizontally instead of vertically due to lot of call back functions within one another.

This is unreadbale and unmaintainable due to the structure => Pyramid of Boom

#### Inversion of Control

```
const cart = ["shoes","pants","belts"];

api.createOrder(cart, function () {
   api.proceedToPayment()
      
   })
```



 
