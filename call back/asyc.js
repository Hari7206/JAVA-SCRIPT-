// first of all we study about the synchronus and a syncronus programming syncronus programing are the one which write the code in the flow and the asyncronus programing are that which not work in the flow like the when we attach api with our project .  and it take time to get data in our project so our site did not wait till the data is fully fetch and run the other code it is called the asyncronus programing
console.log("one");
console.log(" this before i write the code");

setTimeout( () => {
    console.log("hello theree");
    
} , 4000);   // here our 4000 means that the 4 second . 4s = 4000 milli second 
console.log("this is i write after the time out code ");

console.log("two");
console.log("three");

