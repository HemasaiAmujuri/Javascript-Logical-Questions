function freezePropertyInObject(user){
    Object.defineProperty(user, "age", {
        writable : false
    })

    user.age = 25;
    return user;
}


const user = {
     "name" : "sai",
     "age" : 20
} 


console.log(freezePropertyInObject(user))