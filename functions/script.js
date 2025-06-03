// Functions

// Declared functions can be called before they are declared in the code
showMessage();

// Function expressions can't be called before initialization
// const numTest = getNumDigits(3456); // error

// Create
function showMessage() {
  console.log('Hello, this is a test.');
  return; // optional, returns no value
}

const getNumDigits = function (num) {
  const result = num.toString().length;
  return `${num} has ${result} digits.`;
};

// Rewritten as arrow function
const getNumDigits2 = (num) => {
  const result = num.toString().length;
  return `${num} has ${result} digits.`;
};

// () are optional around single parameter, e.g.
// const getNumDigits2 = num =>

// Shorter arrow function syntax when only returning a value
const isPassingGrade = (score) => score >= 75;
const getMax = (n1, n2) => Math.max(n1, n2);

// Short arrow function that returns an object
const getStudent = () => ({
  firstName: 'liam',
  lastName: 'finn',
  age: '11',
});

// Immediately invoked function expression (IIFE)
(function () {
  const greeting = 'Hello from unnamed function.';
  console.log(greeting);
})();

(function (name) {
  const namedGreeting = `Hello ${name} from unnamed function 2.`;
  console.log(namedGreeting);
})('Liz');

// IIFE can have a name, which can be useful for recursion or debugging
(function getRandomNum() {
  const random = Math.floor(Math.random() * 100);
  console.log(`Here is a random number: ${random}`);
  if (random < 20) return;
  getRandomNum();
})();

const w = 100;
console.log(w);

function getAvg(x, y, z) {
  // const w = 98; // overwrites global var
  // console.log(w);
  return (x + y + z) / 3;
}

// Create with default param values
function addExpense(amount, payee = 'unknown', category = 'uncategorized') {
  console.log(`Paid ${payee} ${amount} for ${category}`);
}

// Take any number of args
function addTodos(...todos) {
  // arguments will be turned into an array
  return todos;
}

// Nesting
function parent() {
  const parentMsg = 'parent';
  console.log(parentMsg);

  function child() {
    const childMsg = 'child';
    console.log(childMsg, parentMsg);
  }

  child();
  return;
}

// Call
showMessage();
console.log(getAvg(100, 300, 225));
addExpense(39.23, 'walgreens', 'health');
addExpense(25.0, 'nintendo');
addExpense(134.78);
let output = addTodos('label boxes', 'vacuum bedroom', 'dust desk');
console.log(output);
parent();
console.log(getNumDigits(293842845733467));
console.log(getNumDigits2(765));
console.log(isPassingGrade(99));
console.log(isPassingGrade(69));
console.log(getMax(45, 71));
console.log(getStudent());
