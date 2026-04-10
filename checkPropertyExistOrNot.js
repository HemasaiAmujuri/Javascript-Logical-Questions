function checkPropertyExistOrNot(name, person){
    if(person.hasOwnProperty(name)){
        return person[name]
    }else{
        return false
    }

}

const person =  {"name" : "Sai",
    "age" : 25,
    "city" : "Hyderabad" }

console.log(checkPropertyExistOrNot("name", person))