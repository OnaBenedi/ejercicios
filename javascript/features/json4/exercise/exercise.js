const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

const filter = {
  id: person.id,
  age: person.age,
}
const json = JSON.parse(JSON.stringify(filter));

console.log(json); // Should return: { id: 1, age: 25 }
