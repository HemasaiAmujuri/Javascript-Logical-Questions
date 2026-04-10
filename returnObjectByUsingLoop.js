function returnObject(person){
   for(let key in person){
    console.log(key, person[key])
   }
}

let person = {
  name: "John",
  age: 25,
  city : "Hyderabad"
};

returnObject(person)