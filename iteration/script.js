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
