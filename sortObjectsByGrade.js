const students = [
  {
    id: 1,
    name: "Alice Johnson",
    grade: 85
  },
  {
    id: 2,
    name: "Brian Lee",
    grade: 92
  },
  {
    id: 3,
    name: "Carla Gomez",
    grade: 78
  },
  {
    id: 4,
    name: "David Kim",
    grade: 89
  },
  {
    id: 5,
    name: "Ella Smith",
    grade: 95
  }
];



students.sort((a,b) => a.grade-b.grade)  //ascending order
// students.sort((a,b) => b.grade-a.grade)   //descending order

console.log(students);