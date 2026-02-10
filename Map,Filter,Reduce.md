
#### Map, Filter and Reduce 


### Map function

```
const arr = [1,2,3,4,5];

// const Double = [2,4,6,16,25]

// const Triple = [3,6,9,12,15]

// const Binary = ["101","1","11","10","110"]

function double(x)
{
 return x*2;
}

function triple(x)
{
 return x*3;
}

function binary(x)
{
 return x.toString(2);
}

const output = arr.map(double);
console.log(output);

const output2 = arr.map(triple);
console.log(output2);

const output3= arr.map(binary);
console.log(output3);
```

Also can be written as
```
const output4= arr.map(function binary(x)
{
 return x.toString(2);
});
console.log(output4);


const output5= arr.map((x) => x.toString(2);
console.log(output5);

```

### Filter function

```
const arr = [1,2,3,4,5,6];

// filter out odd values

function isOdd(x)
{
  return x%2;
}

const output1 = arr.filter(isOdd);

function isEven(x)
{
  return x%2==0;
}

const output2 = arr.filter(isEven);

function isGreaterthanfour(x)
{
  return x>4;
}

const output3 = arr.filter(isGreaterthanfour);


const output4 = arr.filter(function isGreaterthanfour(x)
{
  return x>4;
});

const output4 = arr.filter(f(x) => x>4);
console.log(output4);

```
### Reduce 

```
const arr = [1,2,3,4,5]

// sum or max

function findSum (arr) {
  let sum =0;

  for(let i=0;i<arr.length;i++)
  { 
    sum=sum+arr[i];
  }

  return sum;
}

console.log(findSum(arr));
```

**Transforming the logic using "reduce"**

```
const output = arr.reduce( function (acc,curr) {
    acc = acc + curr;
    return acc;
},0);

console.log(output);
```

**Tricky example-1 to find max inside the array**

```
const arr = [1,2,3,4,5]

// sum or max

function findMax (arr) {
  let max =0;
  for(let i=0;i<arr.length;i++)
  {
    if(arr[i]>max)
    max=arr[i];
  }

  return max;
}

console.log(findMax(arr));
```

**Transforming the logic using "reduce"**

```
const output = arr.reduce(function (acc, curr) {
  if(curr > acc){
     acc=curr;
  }
  return acc;
}, 0);

console.log(output);
```


**Tricky example-2 to find full name for each elemet in the array**

```
const users = {
  {firstName:"Sahana", lastName:"Bhargavi", age:29},
  {firstName:"Sai", lastName:"Sree", age:24},
  {firstName:"Aish", lastName:"Sri", age:30}
};

const output = users.map( x => x.firstName + x.lastName);

console.log(output);
```

**Tricky example-3 to find count of unique age for each elemet in the array**
```
const users = {
  {firstName:"Sahana", lastName:"Bhargavi", age:29},
  {firstName:"Sai", lastName:"Sree", age:24},
  {firstName:"Aish", lastName:"Sri", age:30},
   {firstName:"Smriti", lastName:"Mad", age:30}
};

// acc ={29:1,24:1,30:2}
const output = users.reduce( function (acc, curr) {
    if(acc[curr.age]) {
      acc[curr.age]+=1;
    }
    else
    {
    acc[curr.age]=1;
    }
  return acc;
},{});
```

**Example to filter out first name of all the people whose age is less than 30**

```
const output = users.filter((x)=>x.age<30)
                    .map((x)=>x.firtName);
```

```
const output = users.reduce( function (acc,curr) {
  if(curr.age<30)
  {
   acc.push(curr.firstName);
  }
 return acc;
}, []);


```
