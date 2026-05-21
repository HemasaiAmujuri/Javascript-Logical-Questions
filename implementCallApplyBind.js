// call apply bind are used to control the value of this

//Normal way

const user = {
    name : "Sai",
    greet : function(){
        console.log(`Hello ${this.name}`);
    }
}


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