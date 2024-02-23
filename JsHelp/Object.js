// JavaScript Objects

let object = {
    city:'hooghly',
    country:'India',
    state:'West Bengal',
    merital:false,
    Qulification:"Mtech",
    rank:9.7,
    salary:50000,
    role:undefined,
    value:null
}

console.log(typeof (object))

console.log(object)
object.city = 'howda';
console.log(object.city)
object['city'] ='hooghly';
console.log(object.city)

// blank object

const obj = {}
obj.name = 'Miraj';
obj.roll = 3;
console.log(obj)

// Nested object :
const student = { 
    name: 'John', 
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}

// accessing property of student object
console.log(student.marks); 

// accessing property of marks object
console.log(student.marks.science); 


// JavaScript Object Methods
const person = {
    name: 'Sam',
    age: 30,
    // using function as a value
    greet: function() { console.log('hello') }
}

person.greet(); // hello



