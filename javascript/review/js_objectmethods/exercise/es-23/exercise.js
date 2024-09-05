const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

for(const key of Object.keys(person)){
  console.log(`${key} : ${person[key]}`);
}