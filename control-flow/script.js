// Control Flow

// Shorthand If statement syntax (optional)
const x = 78
const y = 33

if (x >= y) console.log(`${x} is >= ${y}`), console.log('this is true')
else console.log(`${x} is less than ${y}`)

// Ternary operator
let name = ''
!name ? console.log('Anonymous') : console.log(`Thank you, ${name}`)
name = 'Lincoln'
!name ? console.log('Anonymous') : console.log(`Thank you, ${name}`)

// ?? - Nullish coalescing operator - returns right side if left side is null or undefined
console.log(1000 ?? 'hello')
console.log(0 ?? 'hello')
console.log('' ?? 'hello')
console.log(null ?? 'goodbye')
console.log(undefined ?? 'goodbye')
