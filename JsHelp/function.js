// 1.
function sum(x,y) {
    return x+y
}
console.log(sum(2,2))

// 2.
function pi(){
    const PI = 3.14
    return (PI)
}
console.log(pi())

// 3.
function wish(){
    console.log('Hello Miraj')
}
wish()

// 4.
function display(name,roll){
    console.log('Name is : ',name)
    console.log('Roll is : ',roll)
}
display('Miraj',3)


/* Arrow function */

sum = (a,b) => a+b;
console.log(sum(2,2))

M = n => n*n;
console.log(M(5))

let age = 18;
Adult = (age>17)? ()=> console.log('True'):()=> console.log('False');
Adult()

Show = x => console.log('hello');
Show()

display = (a,b) =>{
    return a+b;
}
console.log(display(2,4))

wish = name =>{
    console.log('hello ',name)
}
wish('Miraj')

/* function erviroment */

function Person() {
    this.name = 'Miraj',
    this.age = 18,
    this.sayName = function () {

        console.log(this.age);
        let innerFunc = () => {
            console.log(this.age,this.name);
        }

        innerFunc();
    }
}

const x = new Person();
x.sayName();

/* 
   Arrow functions do not have arguments binding
   Regular functions have arguments binding. 
   That's why when you pass arguments to a regular function, 
   you can access them using the arguments keyword. For example,
 */

// Arguments Binding of regular function
let a = function () {
    console.log(arguments);
}
a(4,6,7);

// The spread operator ... is used to expand or spread an iterable or an array. For example,
let b = (...n) => {
    console.log(n);
}

b(4,6,7);

// inside Named function we can access parameter using aurgement object
// in anonymus function its not possible
function proof(a,b,c) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}

proof(2,3,4)


// Method can be written inside objects also
const obj = {
    multiply(x, y) {
      return x * y;
    },
};

console.log(obj.multiply(2,3));