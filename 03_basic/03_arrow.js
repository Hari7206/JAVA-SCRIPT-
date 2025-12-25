// in this we are gonna learn about the arrow and the this function
/* 
main things to know that 
this directly show the current context in the java script
when we print the this wihtout any current context it print the empty value 
*/

let data = {
    productName: " Narzo n53",
    price: 9500 ,
    useername: "Hari",
    welcomeMessage: function() {
        console.log(` ${this.useername} place the order` )
    }
}
data.welcomeMessage()  // here we can  see this is how we give the name of the usename by the help of the function
// now here we see that how we can print the new name in old function
data.useername = "Preeti"
data.welcomeMessage()  // this is how we can prin the both current and the old name with the help of the this because this print the current context of the function
// what if we print the only the this value 
console.log(this);

// now lets see the arrow of the function
function arrow() {
    let username = hari
    console.log(this.username);
    // so here we can see that the this only work with the object not with the function
}
// now we see by the arrow function will it print it or not 
let name = () => {
    let username = "hari"
    console.log(this);  // now we can see it still dont print the value like this
}
name()

// ====================    = ()  =>  so this is our arrow function ==========================
//  we do the first thing that we will print the value of the funtion as the normal value 



// function sum(num1 , num2) {
//     return num1 + num2;
// } 
// console.log(sum(5 , 6));  // this is the decent way of print the function now we see how to do this same in the arrow function 
let sum = (num1 , num2) => (num1 + num2)
console.log(sum(5 , 6));  // this is how we print the value of the function to add them

let gamename = () => ({ username: "Brutal Gaming"})
console.log(gamename());  // this is how we can print the object with the help of the arrow 





