function OccuranceOfElementAnArray(fruits){
    let itemsCount = {};
    for(i = 0; i < fruits.length; i++){
        let fruit = fruits[i]
        if(itemsCount[fruit]){
            itemsCount[fruit] += 1
        }else{
            itemsCount[fruit] = 1
        }
    }
    return itemsCount;
}

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

console.log(OccuranceOfElementAnArray(fruits));

