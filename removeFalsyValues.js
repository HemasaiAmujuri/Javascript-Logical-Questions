const obj = { a: 0, b: "hello", c: null }


function removeFalsyValues(obj) {
   for(let key in obj){
    if(!obj[key]){
        delete obj[key]
    }
   }
   return obj
}


console.log(removeFalsyValues(obj));