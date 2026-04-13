function freezeObject(obj){
    Object.freeze(obj)
    obj.age = 25
    return obj
}


const obj = {
    "name" : "Sai",
    "age" : "20"
}

console.log(freezeObject(obj))