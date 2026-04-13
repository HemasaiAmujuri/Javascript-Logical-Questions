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


console.log(compareTwoObjects(user1,user2));