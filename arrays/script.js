// Arrays
const numbers = [102, 574, 93, 2134, 4839, 5];

// Check if value is in array
console.log(numbers.includes(4839));
console.log(numbers.includes(5000));

// Get index of value
console.log(numbers.indexOf(93));
console.log(numbers.indexOf(83)); // -1 (not in array)

// Get part of array starting from index
console.log(numbers.slice(2));

// Get part of array from start index to end index
console.log(numbers.slice(2, 4)); // excludes numbers[4]

// Reverse order
numbers.reverse();
console.log(numbers);

// Insert at end
numbers.push(222);
console.log(numbers);

// Insert at beginning
numbers.unshift(43);
console.log(numbers);

// Concatenating - combines items in arrays
const moreNums = [89, 476, 8, 0];
const allNums = numbers.concat(moreNums); // doesn't change original arrays
console.log(allNums);
console.log(numbers);
console.log(moreNums);

// Spread (...) - similar to concat
const chores = ['dust', 'mop', 'laundry'];
const errands = ['buy groceries', 'donate stuff'];
console.log([...chores, ...errands]);
console.log(chores);
console.log(errands);

// Nesting an array itself (unlimited levels allowed)
const games = [
  'animal crossing',
  'baba is you',
  'persona 5',
  "yoshi's crafted world",
];
const pokemon = ['pokemon sword', 'pokemon shield', 'pokemon scarlet'];
games.push(pokemon);
console.log(games);

// Flattening
const zelda = [
  'breath of the wild',
  "link's awakening",
  'tears of the kingdom',
  'the minish cap',
];
games.unshift(zelda);
console.log(games);

const moreZelda = ['the twilight princess', 'skyward sword'];
games[0].push(moreZelda);
console.log(games);

// by default, flattens 1 level deep
const gamesFlat = games.flat(); // does not change original array
console.log(gamesFlat);
console.log(games);

// flatten specified levels of nesting
console.log(games.flat(2));

// Remove last element
console.log(numbers.pop());
console.log(numbers);

// Remove first element
console.log(numbers.shift());
console.log(numbers);

// Remove specific number of elements starting at index
console.log(numbers.splice(1, 3));
console.log(numbers);
console.log(numbers.splice(1, 1));
console.log(numbers);

// Static methods
console.log(Array.isArray(games));
console.log(Array.isArray(true));
console.log(Array.from('CDEFGAB')); // takes array-like argument

const score1 = 95;
const score2 = 87;
const score3 = 100;
console.log(Array.of(score1, score2, score3));
