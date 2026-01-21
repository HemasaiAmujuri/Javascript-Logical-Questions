const data = [
  { id: 1, name: "A", role: "Dev" },
  { id: 2, name: "B", role: "QA" },
  { id: 1, name: "A", role: "Dev" }
];

function removeDuplicates(data){
    let result = []
    data.forEach((employee) => {
        const exist = result.some(item =>
            item.id == employee.id &&
            item.name == employee.name &&
            item.role == employee.role
        )
        if(!exist){
            result.push(employee)
        }
    });
    return result;
}


console.log(removeDuplicates(data))