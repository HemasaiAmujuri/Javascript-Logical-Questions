function findSecondHighestSalary(arr) {
  arr.sort((a, b) => b.salary - a.salary);
  return arr[1].name;
}

const arr = [{ 'name': 'Ram', 'salary': 100000 },
{ 'name': 'Ramesh', 'salary': 10000 }, { 'name': 'Rakesh', 'salary': 500000 }, { 'name': 'Riya', 'salary': 650000 }, { 'name': 'Rithik', 'salary': 45000 }, { 'name': 'Ritesh', 'salary': 230000 }]

console.log(findSecondHighestSalary(arr));