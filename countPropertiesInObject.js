  
                     //Method-1
  
//   function countPropertiesInObjects(person){        // convert to array and return length of array
//      const array = Object.entries(person);
//      return array.length;
// }



// let person = {
//   name: "John",
//   age: 25,
//   city : "Hyderabad"
// };


// console.log(countPropertiesInObjects(person));



                  // Method -2
function countPropertiesInObjects(person){        //find length with keys
       const count = Object.keys(person).length;
       return count;
}

let person = {
  name: "John",
  age: 25,
  city : "Hyderabad"
};


console.log(countPropertiesInObjects(person));


                //Method -3
// function countPropertiesInObjects(person){      
//      let count = 0;
//      for(let key in person){
//         count++
//      }
//      return count;
// }



// let person = {
//   name: "John",
//   age: 25,
//   city : "Hyderabad"
// };


// console.log(countPropertiesInObjects(person));


             // Method - 4
//   function countPropertiesInObjects(person){       //count object properties by values length
//      const count = Object.values(person).length;
//      return count;
//   }



// let person = {
//   name: "John",
//   age: 25,
//   city : "Hyderabad"
// };


// console.log(countPropertiesInObjects(person));


           //Method - 5
//   function countPropertiesInObjects(person){        // convert to array and return length of array
//      const count = Object.entries(person).length;
//      return count;
// }



// let person = {
//   name: "John",
//   age: 25,
//   city : "Hyderabad"
// };


// console.log(countPropertiesInObjects(person));

