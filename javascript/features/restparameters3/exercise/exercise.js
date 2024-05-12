const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

//const id = person.id;

const { id, ...personInfo } = Object.assign({}, person);
// const personInfo = {
//   ...person
// };
// delete personInfo.id;
console.log(id, personInfo);