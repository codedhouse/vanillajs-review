// Control Flow

// Short If statement with no Else clause
const isLoading = true
isLoading && console.log('Loading results...')

// Short If-Else statement
const x = 78
const y = 33

if (x >= y) console.log(`${x} is >= ${y}`), console.log('this is true')
else console.log(`${x} is less than ${y}`)

// Ternary operator
let name = ''
!name ? console.log('Anonymous') : console.log(`Thank you, ${name}`)
name = 'Lincoln'
!name ? console.log('Anonymous') : console.log(`Thank you, ${name}`)

// Ternary operator with no Else clause
const isReadOnly = true
isReadOnly ? console.log("You don't have permission to edit this file.") : null

// Variable assignment using ternary operator
const isAnon = name ? false : true
console.log(isAnon)

// Ternary operator with multiple statements
let turnsLeft = 2
const takeTurn =
  turnsLeft > 0
    ? (turnsLeft--,
      console.log(`You took a turn. You have ${turnsLeft} turn(s) left.`),
      'gameInProgress')
    : (console.log("Sorry, you're out of turns."), 'endOfGame')
console.log(takeTurn)

// ?? - Nullish coalescing operator - returns right side if left side is null or undefined
console.log(1000 ?? 'hello')
console.log(0 ?? 'hello')
console.log('' ?? 'hello')
console.log(null ?? 'goodbye')
console.log(undefined ?? 'goodbye')
