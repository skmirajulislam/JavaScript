console.log('Type of loop in js :-')

let arr = ['Honda', 'Lamborgini', 'Bugerti', 'Mahindra', 'Toyota', 'Rolce Royalce']
let Movie = 'Pathan'

const obj = {
    Name: 'Miraj',
    Rank: 9.7,
    Digree: 'btech',
    company: 'Microsoft'
}

// for loop type :--
for (let i = 0; i < 5; i++) {
    console.log("I am ", i)
}

for (i in obj) {
    console.log(i, obj[i])
}

for (i of arr) {
    console.log(i)
}

for (i of Movie) {
    console.log(i)
}

// while loop in js
let a = 0;
while (a < 5) {
    console.log(a)
    a++;
}

// Do while loop 
do {
    console.log(a)
    a++;
} while (a < 10);


// For each loop
arr.forEach(myfunc)
function myfunc(item, index) {
    console.log(item, `[${index}]`)
}

arr.forEach((item, index) => {
    console.log(item, `[${index}]`)
})