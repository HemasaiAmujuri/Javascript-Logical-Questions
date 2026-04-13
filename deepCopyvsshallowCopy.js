let user = {
    "name" : "Sai",
    "age" : "25",
    "address" : {
      "city" : "Hyderabad"
    }
    
}


function shallowCopy(user){

    let user1 = { ...user}
    user1.name = "Vinodh"
    user1.address.city  = "Visakhapatnam"
    console.log(user1, "user1")
    console.log(user.name);
    console.log(user.address.city)
    console.log(user.address["city"]);
    console.log(user["address"]["city"]);
}


function DeepCopy(user){
    let user3 = JSON.parse(JSON.stringify(user));
    user3.name = "venkat"
    user3.address.city = "chennai"
    console.log(user3, "user3");
    console.log(user.name);
    console.log(user.address.city)
}




shallowCopy(user);
DeepCopy(user);

//We can implement deep copy using JSON.parse(JSON.stringify(obj)). First, JSON.stringify converts the object into a JSON string. Then JSON.parse converts that string back into a new object, giving us a completely separate copy

