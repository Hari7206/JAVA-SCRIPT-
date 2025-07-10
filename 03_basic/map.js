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
