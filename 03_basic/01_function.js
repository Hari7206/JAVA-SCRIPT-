// so in the function we are  gonna study about the why we use the fucntion 
//  its basic use is the to print the  some block of code many time by storing it in any location of variable

function myName() {
    console.log("H")
    console.log("A")
    console.log("R")
    console.log("I")
}
//  this is how we can make a fucntion by giving the keyword function and declare it varibale  name of the fucntion
//  but it still did not execute to execute it we have to call it by the cll fucntion and the execution ()
// the name of the fucntion is the it refrence and the prethisis is the execution 
//  so in the basic our myName is the refrence  anf this () prethisis is the execution
myName()      // so now we can see that our code is excuted now we dont have to write the same code  again and again we can just type it by the myname to cll it 
console.log()
// But this upper code is not a type of function we done in the code  
//  now lets learn more about the function by the adding two number 
function addTwoNumbers( number1 , number2) {
    // console.log(number1 + number2 )   // after this our result did not print but after this we get the result 
    // return number1+number2   // after this method we got the result beacuse it pass the value ton function
    //  there is one more way to return the value but it is the same only the difference is we have to take one more variable 

    let result = number1+number2
    return  result 
}   // know even the our first time undefined value also be printed beacuse of the we know alredy have pass the value to the fucntionn
let result =addTwoNumbers(5 , 6)
// console.log(result)    // so here we can see that we can acess the number in any variable because it did not pass the value to make it pass the value we have to return the value with the value of the only console log number 1 + 2 
console.log(` our result is the ${result}`)  

//   so here we see the two three things 
/*
first -     the number 1 and the number 2 we declare in the function is the parameter --
second - that we write the number 5 and 6 is the our argument 

we can print the value just by console call log and we need to call it first 
we cant write any code below the return code
we  have to pass the value by return value 
*/

//  now we gonna learn mroe about the parameter
function isloggedinmessage(username) {
    if(username === undefined) {
        console.log("please enter your username ")   // so by giving the if value we can print if the user did not have print his value  
        //  if we write here return it did not print anyvalue of username is undefined cuze we know that in fucntion if we retrun after its below value did not print 
    }
    return `${username} is the username `
}
console.log(isloggedinmessage());    // now we can see the  without console log we cant get the value of answer 


// now we are gonna do the the sum of the cart calculation measn if the person add the many cart item we have to add it all sum of all cost by the fucntion

// function sumOfCart(num1) {
//     return num1
// }
// console.log(sumOfCart(500));   // now here by this function we can get only one item cost and if we increase the parameter we cant still dont know how much the user will chosee the item
//  so for that we have a solution of the rest and the spread option 

/*  now what is rest ?
it is a operator used in the js 
to collect the all spread item is the rest we can collect it in one function
... this three dot is the rest fucntion  
*/
function sumOfCart(  ...num1) {     // we call the three dot both rest and the spread acoording to its use 
        return num1 
    }
    console.log(sumOfCart(500 , 565 ,  56 , 45 , 78));   // know we can see that it print all the value in the same num and we learn to add it in the more condtion fucntin

    //  now we learn how to use the object in the function
    let theproduct = {
        Product: " Gadjet " ,
        Price: 199
    }

    function manageproduct(anyobject) {
        console.log(` The type of the product is ${anyobject.Product}  and the price is ${anyobject.Price}  `);
    }
    manageproduct(theproduct)
   
    //  so now we also do the array in the function to 

    let myarry = [ 200 , 23 ,  45  , 56]

    function findarry(seearry) {
        return seearry[3]
    }
    console.log(findarry(myarry));
    
    // so in this way we can write the the arry in the funtion
    
    
   