// In this chapter learn about the scope 
/* so  
{} <----  this is our scope 
 in function and the if else we use the scope but in the term of object we did not say it as object */

// let  a = 4;
// var b = 5;
// const c = 6;

// console.log(a);
// console.log(b);
// console.log(c);
var b = 345
// one more problem if we have the var outside by the other coder so it is not printed in the new value
    //     now till here we dont have any problem but if we comment this and make it in the scope we can see the problem in the scope 
    if (true) {
        let  a = 4;  // so here we can see we have the problem that it say a is not defined
        var b = 5;    // but in term of the var it is printed so basically for this understanding we learn about the scope
        const c = 6; // now it say that c is not defined let comment this also
    }
    // console.log(a);
    console.log(b);
    // console.log(c);
    

    //  outside our scope means outside our if else  value are the global value and inside it is called as the local value 
//  one example of the global and the local variable
let vikas = 45;
if (true) {
   let  vikas = "pagal"
    console.log( "Inner:" ,vikas);
    
}
console.log(vikas);   // so we can see the difference of the inner and the outer both value different which is basic global and the local

//  lets more learn about the 

function one(){
    const username = "Hari";
    function two() {
        const price = 23;
        console.log(username);
    }
    // console.log(price)
two()
}
one()
// so this is how we can see a parent function cant print the child value but child can print the value of the prinnt 
 
// one more example by the  if statement

if (true) {
    const usernameo = "Hari"
    if (usernameo === "Hari") {
        const lastname = " Thapa"
         console.log( usernameo + lastname);  
     }
}

// interting fiek

console.log(addone(5))   // so in the funtion it will print the value of the function because it is allow in the function
function addone(num){
    return num +1;
}
// console.log(addtwo(5));   // but in this we see that here before declaration we can't print the value beacuse of the hoising here we store the value in h
var addtwo = function(num) {
    return num +2
}
console.log(addtwo(5));


