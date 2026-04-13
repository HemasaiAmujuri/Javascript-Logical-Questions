function freezePropertiesInObject(obj1){
     Object.defineProperties(obj1, { age: {
            writable: false
        },
        marks : {
            writable: false
        }})
     obj1.age = 25;
     obj1.city = "Visakhapatnam"
     return obj1;
}


const obj1 = {
    "user" : "Sai",
    "age" : "20",
    "marks" : 85,
    "city" : "Hyderabad"
}


console.log(freezePropertiesInObject(obj1));