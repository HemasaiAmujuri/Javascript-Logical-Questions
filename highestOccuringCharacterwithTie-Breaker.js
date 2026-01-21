function frequency(str){   // with loop
    let charcounts = {};
    let maxChar = ""
    let maxCount = 0;
    for(let i = 0; i< str.length; i++){
        let char = str[i]
       charcounts[char] = (charcounts[char] || 0) + 1;
        if(charcounts[char] > maxCount){
            maxCount = charcounts[char];
            maxChar = char;
        }
    }
    return maxChar
}

const str = "abcdefghijaba"

console.log(frequency(str))




// //without loop

// function frequency(str){   // without for loop
//     let charcounts = {};
//     let maxChar = "";
//     let maxCount = 0;

//     // split string into array and iterate with forEach
//     str.split('').forEach(char => {
//         // count character
//         charcounts[char] = (charcounts[char] || 0) + 1;

//         // update max character if needed
//         if(charcounts[char] > maxCount){
//             maxCount = charcounts[char];
//             maxChar = char;
//         }
//     });

//     return maxChar;
// }

// const str = "abcdefghijaba";
// console.log(frequency(str)); // Output: 'a'
