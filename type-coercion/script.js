// (Implicit) Type Coercion

// number to string
let result = 10 + '1'; // '101'

// string to number
result = 6 * '2'; // 12
result = '100' - 99; // 1

// boolean to number
result = true + 999;
result = false - 10;
console.log(result, typeof result);

// null to number (0)
result = 29 + null; // 29

// null to string
result = null + 'alphamexatronoise';

console.log(result, typeof result);
