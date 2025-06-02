// Arrays
const numbers = [102, 574, 93, 2134, 4839, 5];

// Check if value is in array
console.log(numbers.includes(4839));
console.log(numbers.includes(5000));

// Get index of value
console.log(numbers.indexOf(93));
console.log(numbers.indexOf(83)); // -1 (not in array)

// Insert at end
numbers.push(222);
console.log(numbers);

// Insert at beginning
numbers.unshift(43);
console.log(numbers);

// Remove last element
console.log(numbers.pop());
console.log(numbers);

// Remove first element
console.log(numbers.shift());
console.log(numbers);

// Reverse order
numbers.reverse();
console.log(numbers);
