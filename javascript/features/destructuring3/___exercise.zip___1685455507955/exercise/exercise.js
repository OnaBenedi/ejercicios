const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

function isAdult({age}) {
  return age >= 18;
}

console.log(isAdult(person));