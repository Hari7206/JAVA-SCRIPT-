// so here we see the new type of the loop in the js which is called for of used to go and select each and every character at the string or array
let name = "Hari Thapa"
let size = 0;
for (let val of name) {  // first we give the any data storing type to the val  . val means the value of something . then we use the of and select our variable which we want to see the single single variables
    console.log("val at " + size + " is " + val );  // this is how we can also set the which alphbet is on which no
    size ++  // from here we are updating the sise of the numbers
}
console.log(" The name take total space of " + size + " numbers " );   // at last out of the box we are able to print the total size of the value  // js string is imutable 

function sum(x , y) {
    return x + y;
}
console.log(sum(4 , 5));

let myname = (firstname , lastname) => {
    console.log(firstname , lastname);
    
}
myname("hari " , "thapa ") // for each are higher order funtion