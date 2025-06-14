// Console functions
console.log(100)
console.log('Hello')
const x = 250
console.log(x)

console.error('Error')

console.warn('Warning')

console.table({ brand: '123 Tea', name: 'peppermint' })

console.group('mygrp')
console.log('math')
console.error('1+1=11')
console.warn('warning')
console.groupEnd()

const styles = 'background-color: blue; color: yellow'
console.log('%cHello', styles)

// Comments
// Ctrl-/ in VS Code for single line

/* Multi-line comment
---------------------
Multi-line comment */

// Variable declaration/initialization (let, var & const)
// variable names: can have letters, numbers, underscores, and dollar signs
// variable names can't start with a number

// var (function scoped, not block scoped)
// var gets added to the Window object (let & const don't get added)
var message
message = 'Good day'
console.log(message, myVar) // myVar = undefined
var myVar = 787
message = 'Goodbye'

// let (similar to var but block scoped)
let city = 'Beverly Hills'
let zipCode
console.log(city, zipCode) // zipCode = undefined
zipCode = '90210'
// console.log(city, zipCode, state); // error
let state = 'CA'
state = 'KY'

// const - requires initializer
// const myConst;  // error
const maxScore = 100
const georgiaCode = 'GA'
// georgiaCode = 'XY';  // error

// multivar declarations
var subject, teacher, room
let id,
  name = 'Jill',
  color
const a = 90,
  b = 80,
  c = 75,
  d = 65

console.log(name)
console.log(c)

// const with non-primitive types
const flavors = ['hibiscus', 'lavender', 'mint chocolate']
// const flavors = ['cherry', 'grape'];  // error
flavors.push('chamomile')
console.log(flavors)

const recipe = {
  name: 'bacon and cheese omelet',
  category: 'breakfast',
}
console.log(recipe)

// const recipe = {
// name = 'pesto pasta',
// category = 'pasta'
// };  // error

recipe.name = 'fettucine alfredo'
recipe.category = 'carbs'
console.log(recipe)

// data types - primitive
// string
const birthday = 'October 26'
console.log(birthday, typeof birthday)
// number
const maxCapacity = 250
console.log(maxCapacity, typeof maxCapacity)
const pi = 3.14159
console.log(pi, typeof pi)
// boolean
let isComplete = false
console.log(isComplete, typeof isComplete)
// BigInt - for numbers too big for number type
// Must end with 'n'
const hugeInt = 9874295639847293874n
console.log(hugeInt, typeof hugeInt)
// symbol
const category = Symbol('category')
console.log(category, typeof category)
// null
let phoneNumber = null
console.log(phoneNumber, typeof phoneNumber) // typeof shows 'object' but it is not
// undefined
let totalAmount
const orderNumber = undefined

// data types - reference
// array
const tasks = ['get gas', 'buy groceries', 'send package']
console.log(tasks, typeof tasks)

const wishlist = new Array('shoes', 'bike', 'car')
console.log(wishlist)
wishlist[1] = 'board game'
console.log(wishlist)

const randomStuff = [148, '9th', false]

let myStuff = new Array()
console.log(myStuff.length)
// object
const contact = {
  firstName: 'Hannah',
  lastName: 'Ortiz',
  phone: '3105557766',
}
console.log(contact, typeof contact)
// function
function countdown() {
  console.log('10 9 8 7 6 5 4 3 2 1 0')
}
console.log(countdown, typeof countdown) // typeof shows 'function' since it is a function object

// more on reference types
const player = contact
player.firstName = 'Charlotte'
console.log(player.firstName, contact.firstName)

// operators - arithmetic
// +, - , *, / , %, **, ++, --
let num = 79
const div = num / 3
console.log(div)
console.log(num ** 2)
num++
console.log(num)

// Truthy & Falsy
// Falsy: false, 0, empty string, null, undefined, NaN
// Everything else is truthy

// operators - assignment
// =, +=, -=, *=, /=, %=, ||=, &&=, ??=
let statusCode = 0
statusCode ||= 1 // assign right side if left side is falsy
console.log(`Status: ${statusCode}`)
statusCode ||= 2
console.log(`Status: ${statusCode}`)
statusCode &&= 0 // assign right side if left side is truthy
console.log(`Status: ${statusCode}`)
statusCode = null
statusCode ??= 8 // assign right side if left side is null or undefined
console.log(`Status: ${statusCode}`)
statusCode = undefined
statusCode ??= 11
console.log(`Status: ${statusCode}`)
statusCode = NaN
statusCode ??= 200
console.log(`Status: ${statusCode}`)

// operators - concatenation
console.log('HI ' + 'THERE')

// operators - comparison
// ==  (equal value), !=
// === (equal value & type), !==
// >, <, >=, <=
console.log('25' == 25) // true
console.log('25' === 25) // false
