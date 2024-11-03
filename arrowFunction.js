// Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/

const greet = (name) => {
  console.log(`Hello, ${name}`);
};

greet("Ammar");

// Write a simple arrow function that takes two parameters and returns their sum.

const addintion = (num1, num2) => {
  return num1 + num2;
};

console.log(addintion(3, 5));

// Write a simple arrow function that squares a number.

const squares = (number) => {
  return number ** 2;
};

console.log(squares(2));
