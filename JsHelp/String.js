let str = 'Apple, Banana, Kiwi'
let x = ', Apple '
let y = 'Kiwi'
console.log(str.length)
console.log(str.slice(6,19))
console.log(str.lastIndexOf('i'))
console.log(str.indexOf('A'))
console.log(str.split(','))
console.log(str.replace('Apple','Mango'))
console.log(str.charAt(0))
console.log(str.startsWith('Ap'))
console.log(str.endsWith('wi'))
console.log(str.concat(x))
console.log(str.toLowerCase())
console.log(str.toUpperCase())
console.log(str.substring(0,5))
console.log(str.includes('Banana'))
console.log(str.repeat(2))
console.log(str.charCodeAt(0))// Ascii UTF-16

let string1 = String.fromCharCode(72, 69, 76, 76, 79);
console.log(string1);
console.log(str.match(y))

for (result of str.matchAll(y)) {
    console.log(result);
}

let regExp = /[A-Z]/;
console.log(str.search(regExp))
console.log(str.trim())
console.log(str.padStart(10,"*"))

let string = "CODE";
let paddedString1 = string1.padStart(10, "*");
console.log(paddedString1);
let paddedString2 = string.padEnd(10, "*");
console.log(paddedString2);

let result1 = 'c'.localeCompare('b');
console.log(result1);
