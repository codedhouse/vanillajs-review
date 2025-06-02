// Objects

// Create
const todo = {
  id: 12,
  name: 'dust ceiling fan',
  details: {
    dueDate: '6/30/2025',
    location: 'home',
  },
  days: ['wednesday', 'saturday'],
  isComplete: false,
  toString: function () {
    console.log(`${this.details.dueDate}: ${this.name}`);
  },
};

const user = new Object(); // empty object
const thing = Object.assign({}); // empty object

const color = 'red';
const shape = 'pentagon';
const id = '1';
const thing2 = {
  color, // same as color: color
  shape,
  id,
};
console.log(thing2);

// Check if object has property
console.log(todo.hasOwnProperty('isComplete'));
console.log(todo.hasOwnProperty('priority'));

// Get value at key
console.log(todo.name);
console.log(todo['name']);
console.log(todo.details.location);
console.log(todo.days[0]);
const {
  days,
  isComplete,
  details: { dueDate },
} = todo;
console.log(days, isComplete, dueDate);

// Get value & store in variable with different name from key
const { durationInMins: minsToComplete } = todo;
console.log(minsToComplete);

// Get all values
console.log(Object.values(todo));

// Get all the keys
console.log(Object.keys(todo));

// Get number of properties
console.log(Object.keys(todo).length);

// Get all key-value pairs
console.log(Object.entries(todo));

// Call functions
todo.toString();

// Change values
todo.details.dueDate = '6/20/2025';
console.log(todo.details);
todo.days.push('sunday');
console.log(todo.days);

// Add new property
todo.durationInMins = 10;

user.id = 11;
user.username = 'kellyhm';
console.log(user);

// Combine properties from different objects
const game1 = { name: 'scrabble', category: 'word' };
const game2 = { minPlayers: 1, maxPlayers: 4 };
const game = { ...game1, ...game2 };
const game3 = Object.assign({}, game1, game2); // older way
console.log(game);
console.log(game3);

// Remove property
delete todo.days;

// Arrays of objects
const colors = [
  { id: 1, name: 'black' },
  { id: 2, name: 'red' },
  { id: 3, name: 'reddish brown' },
  { id: 4, name: 'dark bluish gray' },
];
