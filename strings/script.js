// Strings

// Template strings
const day = 'Saturday';
const taskCount = 36;

let message = `Today is ${day}. You have ${taskCount} incomplete tasks.`;

console.log(message);
console.log(`There are ${24 * 60} minutes in 1 day.`);

// String properties
let result = message.length;
console.log(result);

// String methods
let msgProto = message.__proto__;
console.log(msgProto); // shows list of available methods in the console

// String characters - using index or charAt()
console.log(message[0]); // first character
console.log(message[40]);
console.log(message.charAt(0)); // first character
