function objectToArray(obj){
    const keys = Object.keys(obj);
    console.log(keys);
    const values = Object.values(obj);
    console.log(values);
    const objectToArray = Object.entries(obj)
    return objectToArray;
}


const user = { name : "sai", age : 20, location : "Hyderabad"}


const data = objectToArray(user);

console.log(data);