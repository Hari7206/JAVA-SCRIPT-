const mynum =  [1 , 2  , 3   , 4  , 5  , 6  , 7 ];

// this is without scope thing
const newnums = mynum.map((num) => num + 10 )

// here also we have the scope problem 
 let ymnum = mynum.map((num) => {num - 23} )
 // so it wont be print cause we did not return the value 
console.log(newnums);
console.log(ymnum);

// so from here we will learn that about the chaining
// so this is called the chaining  where we add the multiple 1s 
const chain = mynum.map((num) => num * 10).map((num) => num +1).filter((num) => num > 31)
console.log(chain);


// now we will learn about the reduce so here we have accumelilator and current value whree accumeliator is intial valeu and the current value is the value in which we are assigin the rudece keyword its like the for loop but its is an reduce keyword usees

let myval = [1 , 2  , 3  , 4 ]
let myinitalval = 0;

console.log(`the final value is ${finalresult}`);
