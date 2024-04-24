class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toJson() {
    return JSON.stringify(this);
  }

  static fromJson(jsonParam){ //definimos un tipo de funcion dentro de las clases que despues podemos acceder a ellas desde fuera de la clase
    const objectJson = JSON.parse(jsonParam);
     return new Person (objectJson.id, objectJson.firstName, objectJson.lastName, objectJson.age)
  }
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);