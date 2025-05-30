// Type Conversion

// string to number using parseInt()
let quantity = '45';
console.log(quantity, typeof quantity);
quantity = parseInt(quantity);
console.log(quantity, typeof quantity);
quantity = 12.5;
quantity = parseInt(quantity);
console.log(quantity, typeof quantity);

// string to number using parseFloat()
let price = '10.99';
console.log(price, typeof price);
price = parseFloat(price);
console.log(price, typeof price);
quantity = parseFloat(quantity);
console.log(quantity);

// string to number using + operator
quantity = '125';
console.log(quantity, typeof quantity);
quantity = +quantity;
console.log(quantity, typeof quantity);

// string to number using Number()
let total = '278.99';
console.log(total, typeof total);
total = Number(total);
console.log(total, typeof total);

// number to string using toString()
id = 7982301;
id = id.toString();
console.log(id, typeof id);

// number to string using String()
pi = 3.1416;
pi = String(pi);
console.log(pi, typeof pi);

// number to boolean
let num = 45;
num = Boolean(num);
console.log(num, typeof num);
num = 0.0;
num = Boolean(num);
console.log(num, typeof num);
