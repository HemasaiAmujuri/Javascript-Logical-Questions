// call apply bind are used to control the value of this

//Normal way

const user = {
    name : "Sai",
    greet : function(){
        console.log(`Hello ${this.name}`);
    }
}

//Explanation: Here this refers to the user object because the function is called using user.greet().


user.greet(); // Hello Sai


//But this way not workout 

const user2 = {
    name : "Ravi",
    city : "Hyderabad"
}


function greetings(user2){
    console.log(`Hello ${this.name} from ${this.city}`);
}

greetings(user2); // Hello undefined from undefined

//Explanation

//PROBLEM:This happens because it is a normal function call. this is not automatically bound to user2.


//to prevent this use call
//it runs immediately
//it passess arguments one by one

greetings.call(user2); // Hello Ravi from Hyderabad


//to prevent this use apply
//it runs immediately
//it passess arguments as an array

function greetingsFromApply(city){
    console.log(`Hello ${this.name} from ${city}`);
}

greetingsFromApply.apply(user2, ["hyderabad"]); // Hello Ravi from Hyderabad



//to prevent this use bind
//it does not run immediately
//it passess arguments one by one

const bind = greetingsFromApply.bind(user2, "hyderabad"); // it will not print anything
bind(); // Hello Ravi from Hyderabad


//We mainly use call, apply, and bind when we want to reuse functions and explicitly control the value of this. bind is especially useful in callbacks and event handlers because it returns a new function with fixed context