function sum(...nums) {
  return nums.reduce((num1, num2) => num1 + num2);
}

const numbers = [1, 2, 3, 4];
console.log(sum(...numbers));