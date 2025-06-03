// Functions

// Create
function showMessage() {
  console.log('Hello, this is a test.');
  return; // optional, returns no value
}

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

// Call
showMessage();
console.log(getAvg(100, 300, 225));
addExpense(39.23, 'walgreens', 'health');
addExpense(25.0, 'nintendo');
addExpense(134.78);
let output = addTodos('label boxes', 'vacuum bedroom', 'dust desk');
console.log(output);
