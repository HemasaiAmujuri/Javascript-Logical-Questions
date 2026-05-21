const users = [ 
   { id : 1, "name" : "Sai", email : "sai@gmail.com",  city : "hyderabad" },
   { id : 1, "name" : "Sai", email : "sai@gmail.com",  city : "hyderabad"},
   { id : 2, "name" : "vinodh", email : "vinodh@gmail.com",  city : "vizag"},
   { id : 3, "name" : "raju", email : "raju@gmail.com",  city : "bangalore"}
   ]

let uniqueUsers = [];
let set = new Set();


function fetchUniqueUsers(users){
    for(let i = 0; i< users.length; i++){
        let user = users[i];
        if(!set.has(user.id)){
            set.add(user.id);
            uniqueUsers.push(user);
        }
    }
    return uniqueUsers;
}


console.log(fetchUniqueUsers(users))

let query = "vizag"
function searchUser(uniqueUsers, query){
    let lowerQuery = query.toLowerCase();
    return uniqueUsers.filter((user) => {
        return (
            user.name.toLowerCase().includes(lowerQuery) ||
            user.email.toLowerCase().includes(lowerQuery) ||
            user.city.toLowerCase().includes(lowerQuery)
        )
    }
    )
}

console.log(searchUser(uniqueUsers, query));