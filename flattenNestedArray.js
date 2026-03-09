                //Method-1
function flattenNestedArray(arr) {
    const singleLevelArray = arr.flat(Infinity);
    return singleLevelArray;
}



const nestedArray =  [1, [2, 3], [4, [5, 6]], 7]
// Output: [1, 2, 3, 4, 5, 6, 7]

console.log(flattenNestedArray(nestedArray));