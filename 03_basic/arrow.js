// so here we will learn the arrow abd this function
const user = {
username: "Hari" ,
price: 999,
welcomemessage: function() { 
    console.log(`${this.username} , welcome to website`);
    // console.log(this);
}
}
// so our this will tell what the current context
user.welcomemessage()
user.username = "vikas "
user.welcomemessage()

// so here our this will show the empty curly braces that means our current this is empty

console.log(this);


// function chai(){
//     let username = "username"
// console.log (this.username) ;
// // so we can see here that our function does not used this in the function

// }
// chai()

const chai =  ()  => {
let username = "hitesh"
console.log(this) ;
}
chai()

const addtwo = (num1 , num2) => {
return num1 + num2
}
console.log(addtwo(3,4));

// so we dont have to use the return when we give the parenthsis and we use the curly braces we have to write the return

const adthree = (num1 , num2) => ({username: "hari"})
console.log(adthree());

