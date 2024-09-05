const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = "Simon"

// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);

// When we modify the object person2 we are also modifying the object person1, because objects are reference values. This means that it does not matter whether you modify the original object or the copy, because both of them are pointing to the same data on the code, in this case, the same object. If we wanted to modify the copy, we should create a whole new object using another technique.
