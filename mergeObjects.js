                             // Method - 1
// function mergeObjects(user1,user2){   // 2 objects has same key second one is overwrite first one
//    const merged = { ...user1, ...user2 }
//    return merged;
// }

// const user1 = {
//     "name" : "Sai",
//     "age" : 25,
//     "city" : "Hyderabad"
// }


// const user2 = {
//      "name" : "Vinodh",
//     "age" : 25,
//     "city" : "Vizag"
// }


// console.log(mergeObjects(user1,user2));

                           // Method - 2
function mergeObjects(user1,user2){   // 2 objects has same key second one is overwrite first one
   const merged = Object.assign({}, user1, user2)
   return merged;
}

const user1 = {
    "name" : "Sai",
    "age" : 25,
    "city" : "Hyderabad"
}


const user2 = {
     "name" : "Vinodh",
    "age" : 25,
    "city" : "Vizag"
}


console.log(mergeObjects(user1,user2));



