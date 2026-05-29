                //Method-1
function flattenNestedArray(arr) {
    const singleLevelArray = arr.flat(Infinity);  //Infinity is used to ensure the array is fully flattened regardless of how deeply nested it is. It removes the need to manually specify the depth level.
    return singleLevelArray;
}



const nestedArray =  [1, [2, 3], [4, [5, 6]], 7]
// Output: [1, 2, 3, 4, 5, 6, 7]

console.log(flattenNestedArray(nestedArray));