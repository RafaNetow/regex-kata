//Hello World

let regex = /hello/
let str = 'hello world'
let result = regex.test(str)
console.log(result)

//Testing DateTime
let notBinary = /[^01]/
console.log(notBinary.test('1100100010100110'))
// → false
console.log(notBinary.test('1100100010200110'))
// → true
