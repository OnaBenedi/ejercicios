const sum = (a, b) => a + b;

const subtract = (a, b) =>  a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const log = (value) => {
  console.log(value);
}

let result = divide(subtract(multiply(sum(2,4), sum(5,2)), 2), 5)

console.log(result);