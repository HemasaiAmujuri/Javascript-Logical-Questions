const uniqueEmployees = [
  { name: "Bob Smith", role: "Developer", location: "NY" },
  { name: "Alice Johnson", role: "Designer", location: "SF" },
  { name: "Robert Brown", role: "Manager", location: "NY" }
];

function searchEmployees(employees, query) {
  const lowerQuery = query.toLowerCase();
  return employees.filter(emp =>
    Object.values(emp).some(value =>
      String(value).toLowerCase().includes(lowerQuery)
    )
  );
}

const searchResult = searchEmployees(uniqueEmployees, "bob");
console.log("Search Results:", searchResult);
