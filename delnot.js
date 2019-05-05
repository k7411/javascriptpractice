console.log("The future says : ", future());

function future(){
    return "You'll never have flying cars";
}

function greet(who){
    console.log("Hello " + who);
}

greet("karan");
console.log("Bye");
function chicken(){
    return egg();
}

function egg(){
    return chicken;
}

console.log(chicken()+ "came first.");
