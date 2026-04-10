function arrayToObject(arr){
    const object = Object.fromEntries(arr)
    return object;
}


const arr = [ ["name" , "sai"], ["age" , "22"], [ "city" , "Hyderabad"]];


console.log(arrayToObject(arr))