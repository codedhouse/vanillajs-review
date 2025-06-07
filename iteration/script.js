// Iteration

// Arrays
const minsPracticed = [30, 120, 15, 45, 20, 0, 55]

// Arrow function in callback
minsPracticed.forEach((m) => console.log(m))

// Loops can be nested any number of levels
// For loop
for (let i = 0; i <= 10; i++) {
  console.log(`A${i}`)
  for (let j = 10; j >= 0; j--) {
    console.log(`${j}Z`)
  }
}

// While loop
let i = 0

while (i < 5) {
  console.log(i + 1)
  i++
}

// Do... While loop
let d = 0

do {
  const x = Math.floor(Math.random() * 27)
  const dx = d * x
  console.log(`do... ${d} * ${x} = ${dx}`)
  d++
} while (d < 30)

// Break & Continue
for (let i = 0; i < 10; i++) {
  const num = 2 ** i
  console.log(`num: ${num}`)
  for (let j = 0; j <= 10; j++) {
    const randomNum = Math.floor(Math.random() * 11)
    console.log(`random: ${randomNum}`)
    if (randomNum > 5) {
      console.log(`j=${j} break`)
      break
    }
  }
  if (num > 250) {
    console.log(`num=${num} continue`)
    continue
  }
  console.log(`num doubled: ${num * 2}`)
}

// Fizz Buzz
for (let i = 1; i <= 100; i++) {
  let msg = i % 3 === 0 ? 'Fizz' : i.toString()
  if (i % 5 === 0) {
    if (msg === 'Fizz') msg += 'Buzz'
    else msg = 'Buzz'
  }
  console.log(msg)
}
