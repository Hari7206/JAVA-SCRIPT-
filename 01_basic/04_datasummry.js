// so here we learn how there is two type of data types are use in java script
//  the two data types are 1 premitive and 2 non premitive ..
// data types are store in the two types of things how the data store and how data use from the databases

// premitives are    1 string , 2 bollion , 3 number , 4 null , 5 undefined , 6 big int , symbol


// here soome  non premitive type  also known as refrence type we can get directly by the memory by refrence 
// array , function , object
let myVar = 42;        // myVar is a number
console.log(typeof myVar); // Output: "number"

myVar = "Hello";       // myVar is now a string
console.log(typeof myVar); // Output: "string"

myVar = true;          // myVar is now a boolean
console.log(typeof myVar); // Output: "boolean"

// so here  we can see that our js is change dynamicly its data types it does not hav e any spoecific data type
//  here our all premitive data types
let str =  "Hari" 
let asnwer = false
let myNum = 343
let yourName = null 
let myName; // its a undefined value
let bigNum = 324424242n

console.table([ str , asnwer ,  myNum , yourName , myName , bigNum])  
// one mroe symbol value 
let myoneId = Symbol(' 234 ')
let mysecondId = Symbol (' 234 ')   // so here our symbol change the value to the for both of them now both are not same id they are same num but not a same id \
console.log( myoneId === mysecondId)   // by this we can see that both id are not equal . so it means it is differ now 


// sp here is all refrence type or non premitive type
//arrry
let heros = [ " iron man" , " thor " , " spider man "] // so this is an array 

// now object we writw the object in the curly braces and we can assign an variable for it also
let mybiio = {
    name: " hari " ,
    age: 20 ,
    roll: 249060n ,

}
console.log(mybiio)

// here is an example of function\
let myfun = function() {
    console.log("helow world")
}