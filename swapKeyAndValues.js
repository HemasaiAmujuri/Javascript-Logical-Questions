                          //method-1
let user = {
    "name" : "Sai",
    "age" : "25",
    "address" : {
      "city" : "Hyderabad"
    }
    
}

function swapKeysAndValues(user){
    let result = {}
   for(let key in user){
      let value = user[key]
      result[value] = key   //asign key value here into result object
   }
   return result
}


console.log(swapKeysAndValues(user));


                             //method-2

// let user = {
//     "name" : "Sai",
//     "age" : "25",
//     "address" : {
//       "city" : "Hyderabad"
//     }
    
// }


// function swapKeysAndValues(user){
//    let result = Object.fromEntries(Object.entries(user).map(([key, value]) => [value,key]));
//    return result;
// }


// console.log(swapKeysAndValues(user))


