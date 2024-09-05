class Person {
  constructor (firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  get firstName (){
    return this._firstName
  }

  set firstName (newFirstName){
    this._firstName = newFirstName;
  }

  get lastName(){
    return this._lastName
  }

  set lastName(newLastName){
    this._lastName = newLastName
  }

  get fullName(){
    return `${this._firstName} ${this.lastName}`
  }

  set fullName(newFullName){
    this._fullName = newFullName;
  }

}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);