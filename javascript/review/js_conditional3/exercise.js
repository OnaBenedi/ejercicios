function sumUntil(maxValue) {
  let finalValue = 0;

  for(let i = 0; i <= maxValue; i++){
    finalValue = finalValue + i
  }

  return finalValue
}

console.log(sumUntil(5));