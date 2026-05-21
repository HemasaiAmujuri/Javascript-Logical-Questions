const user1 = {
    "name" : "Sai",
    "age" : 25,
    "address" : {
      "city" : "Hyderabad"
    }
}


const user2 = {
    "name" : "Sai",
    "age" : 25,
    "address" : {
      "city" : "Hyderabad"
    }
}



function compareTwoObjects(user1,user2){
    if(JSON.stringify(user1) != JSON.stringify(user2)){
        return false;
    }
    return true;
}

//this approach always not reliable because the order of keys in objects is not guaranteed. When we stringify the objects, the order of keys may differ, leading to a false comparison even if the objects have the same key-value pairs.

//For example, if we have two objects
//{"name":"Sai","age":25}
//{"age":25,"name":"Sai"}

//So comparison becomes:

//false

//Using JSON.stringify() is a quick solution for simple objects, but it is not fully reliable because property order matters and functions/undefined values are ignored.


console.log(compareTwoObjects(user1,user2));