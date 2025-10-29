const employees = [
  { id: 1, name: "Alice Johnson", department: "Engineering" },
  { id: 2, name: "Brian Lee", department: "Marketing" },
  { id: 3, name: "Carla Gomez", department: "Human Resources" },
  { id: 4, name: "David Kim", department: "Sales" },
  { id: 5, name: "Ella Smith", department: "Customer Support" },
  { id: 6, name: "Frank Wright", department: "Engineering" },
  { id: 7, name: "Grace Chen", department: "Marketing" },
  { id: 8, name: "Hannah Davis", department: "Sales" },
  { id: 9, name: "Ian Thompson", department: "Human Resources" },
  { id: 10, name: "Jane Wilson", department: "Customer Support" }
];



const grouped = {}


for(let employee of employees){
    let dept = employee.department;
    if(!grouped[dept]){
        grouped[dept] = []
    }
    grouped[dept].push(employee)
}


console.log(grouped)