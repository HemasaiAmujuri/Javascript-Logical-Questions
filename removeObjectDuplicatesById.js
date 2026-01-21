const employees = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
  { id: 4, name: "David", email: "david@example.com" }
];

function removeDuplicates(employees) {
  const sendIds = [];
  const uniqueEmployees = [];

  for (let i = 0; i < employees.length; i++) {
    const emp = employees[i];

    if (!sendIds.includes(emp.id)) {
      sendIds.push(emp.id);
      uniqueEmployees.push(emp);
    }
  }
  return uniqueEmployees;
}
const uniqueEmployees = removeDuplicates(employees);
console.log("Unique Employees:", uniqueEmployees);
