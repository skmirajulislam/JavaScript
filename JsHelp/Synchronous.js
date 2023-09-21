// Syncronous programming (execute now) always it execute first

let a = 10;
let b = 30;
let c = a+b;
console.log('Sum is : ',c)

// Asyncronous programming (execute not now but execute in future)

setTimeout(()=>{
    console.log("I am 2 sec late ");
},2000)

console.log(true+true)

