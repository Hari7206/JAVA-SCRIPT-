// so today we are gonna learn how we can change the type of any data type by the help of data type 
let anyNumber = "343"  //  now this no is in the string form we have to chane this is in the number type
let newnumber = Number(anyNumber)
console.log(typeof (newnumber))  // now our new number is equal to the number it change from the string to number in the new number 
console.log( newnumber )

let anynumebrr = null 
let newnumberr = Number(anynumebrr)
console.log(typeof newnumberr) // here null changed to the number
console.log( newnumberr ) // here it show our=tput 0 becuz null is nothing only type of is changed


let anynumebrrr = undefined 
let newnumberrr = Number(anynumebrrr)
console.log(typeof newnumberrr)  // here it changed to the number
console.log( newnumberrr ) // it shows the output nan  it means not a numebr


let anynumebrrrr = "abcd" 
let newnumberrrr = Number(anynumebrrrr)
console.log(typeof newnumberrrr)  //here it changed to the number
console.log( newnumberrrr ) // it shows the output nan  it means not a numebr

let anynumebrrrrr =  true // let see what will the bollion number will type
let newnumberrrrr = String(anynumebrrrrr)
console.log( typeof newnumberrrrr)
console.log(newnumberrrrr ) // it will print the 1 if we write the flase it will print the zero

let trueis = 1  // whats the output if we covert it into bollion
let bollionnumber = Boolean( trueis)
console.log ( typeof bollionnumber)  // it change the number to bollion here
console.log ( bollionnumber )   // here it change to true output

// same as conversion can change to the string or other data type



