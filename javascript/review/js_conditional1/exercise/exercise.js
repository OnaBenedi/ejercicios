// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  let jobPosition = role;
  switch (jobPosition) {
    case "ceo":
      return 2200;
    case "manager":
      return 1800;
    case "cto":
      return 1800;
    case "developer":
      return 1500;
    default:
      return 1000;
  }
}

const ceoSalary = calculateSalary("ceo");
const managerSalary = calculateSalary("manager");
const ctoSalary = calculateSalary("cto");
const developerSalary = calculateSalary("developer");
const otherSalary = calculateSalary("other");

console.log(`The salary of the CEO is: ${ceoSalary}`);
console.log(`The salary of the manager is: ${managerSalary}`);
console.log(`The salary of the accountant is: ${ctoSalary}`);
console.log(`The salary of the developer is: ${developerSalary}`);
console.log(`The dafault salary is: ${otherSalary}`);
