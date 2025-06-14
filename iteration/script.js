// Iteration

// Array methods: forEach(callback function) - returns nothing
// Callback - a function passed as an arg to another function
const minsPracticed = [30, 120, 15, 45, 20, 0, 55]
minsPracticed.forEach((m) => console.log(m))
minsPracticed.forEach((m, index) => console.log(`${index} - ${m}`))
minsPracticed.forEach((m, index, arr) => console.log(`${index} - ${m}`, arr))
// Pass a named function
function logMins(mins) {
  console.log(mins + ' mins')
}

minsPracticed.forEach(logMins)

// Object arrays
const tour = [
  { city: 'Los Angeles', state: 'CA' },
  { city: 'Taos', state: 'NM' },
  { city: 'Chicago', state: 'IL' },
]

tour.forEach((place) => console.log(place.state))

// Array methods - filter(function) - returns array
const years = [2014, 1984, 1994, 2000, 2012]
const after2000 = years.filter((year) => year > 2000)
console.log(after2000)

const partyMembers = [
  { name: 'sophie', level: 14, class: 'white mage', maxHP: 89 },
  { name: 'tanaqui', level: 17, class: 'rogue', maxHP: 119 },
  { name: 'crusher', level: 25, class: 'warrior', maxHP: 212 },
  { name: 'merlin', level: 31, class: 'wizard', maxHP: 190 },
  { name: 'darwin', level: 13, class: 'engineer', maxHP: 100 },
]

const highHPandLevel = partyMembers.filter(
  (member) => member.maxHP >= 100 && member.level > 20
)
console.log(highHPandLevel)

// Array methods - map(function) - returns array
const newParty = partyMembers.map((member) => ({
  name: member.name,
  newLevel: member.level + 1,
}))
console.log(newParty)

// Array methods - reduce(function(accumulator, currentValue), initialValue) - returns value
const playlist = [
  { order: 1, title: 'track 1', mins: 4, secs: 44 },
  { order: 2, title: 'track 2', mins: 2, secs: 57 },
  { order: 3, title: 'track 3', mins: 4, secs: 1 },
  { order: 4, title: 'track 4', mins: 3, secs: 32 },
  { order: 5, title: 'track 5', mins: 4, secs: 5 },
]

const totalSecs = playlist.reduce((acc, track) => {
  return acc + track.mins * 60 + track.secs
}, 0)
const plMins = Math.floor(totalSecs / 60)
const plSecs = totalSecs % 60
console.log(`${plMins}m ${plSecs}s`)

const someNums = [3, 1, 98, 12]
console.log(
  someNums.reduce((acc, num) => {
    return acc + num * 2
  }, 0)
)

// Loops can be nested any number of levels
// For loop
for (let i = 0; i <= 10; i++) {
  console.log(`A${i}`)
  for (let j = 10; j >= 0; j--) {
    console.log(`${j}Z`)
  }
}

// For... Of loop
const parts = ['brick', 'pin', 'plate', 'slope', 'tile']
for (const part of parts) {
  console.log(`part: ${part}`)
}

const map = new Map()
map.set('id', '321')
map.set('color', 'poppy red')

for (const [key, value] of map) {
  console.log(key, value)
}

// For... in loop (often used with objects)
const mealPlan = {
  breakfast: 'omelet',
  snack1: 'sunflower seeds',
  lunch: 'chicken soup',
  snack2: 'nuts',
  dinner: 'pancakes',
}

for (const key in mealPlan) {
  console.log(key, mealPlan[key])
}

const spices = ['cinnamon', 'cumin', 'chili powder', 'oregano', 'marjoram']
for (const spice in spices) {
  console.log(spice) // spice = key (array index, not the value)
  console.log(spices[spice])
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
