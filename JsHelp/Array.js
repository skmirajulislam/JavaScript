// Array in JavaScript

const cars = ['Bmw', 'Tesla', 'Audi', 'RR', 'Mahindra', 'Toyota'];
console.log(typeof (cars))
console.log(cars)
console.log(cars[0])

let x = 'Miraj'
const tree = Array.from(x);
console.log(tree)

// Array methods
const laptop = ['Dell', 'Hp', 'Asus', 'lenevo', 'RazerBlade', 'Macbook', 'Dell']
console.log(laptop)

// 1
laptop.push('Acer')
console.log(laptop)

// 2
laptop.pop()
console.log(laptop)

// 3
console.log(laptop.length)

// 4
console.log(laptop.indexOf('Macbook'))

// 5
console.log(laptop.lastIndexOf('Dell'))

//6
const phone = ['Motorola', 'Realme', 'Vivo', 'Pixel', 'Oppo', 'Iphone']
const New = laptop.concat(phone)
console.log(laptop)

// 7
laptop.forEach(item => {
    console.log(item)
})

// 8 
phone.fill('Miraj')
console.log(phone)

// 9
const id = [1, 2, 3, 4, 5, 6]
let name = id.find(x => {
    return x > 5;
})
console.log(name)

// 10
let index = id.findIndex(x => {
    return x > 5;
})
console.log(index)

// 11
let str = id.join('')
console.log(str)

str = id.toString()
console.log(str)

// 12
console.log(laptop.sort())

// 13
console.log(id.reverse())

// 14
id.unshift(7)
console.log(id)

// 15
for (i of laptop.keys()) {
    console.log(i)
}

// 17
const value = id.map(item => {
    return item * item
})
console.log(value)

// 18
const nested = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(nested.flat())

// 19 
const Squre = id.flatMap(x => [x ** 2])
console.log(Squre)

// 20
n = id.shift()
console.log(n)

// 21
laptop.splice(2, 1, 'choromebook')
console.log(laptop)

// 22
console.log(id)

let a = id.reduce((x, y) => {
    return x + y;
})
console.log(a)

let b = id.filter(x => {
    return x < 5;
})
console.log(b)

let c = id.some(x => {
    return x % 2 == 0;
})
console.log(c)

let d = id.every(x => {
    return x % 2 == 0;
})
console.log(d)
