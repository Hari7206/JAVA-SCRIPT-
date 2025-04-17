// so here we are gonna learn about the more basic of arry 
 
// how to merge two arrey in one  ?
let marvel_heros = [ " thor " , " hulk" , " iron man "  ]
let dc_heros = [ " superman " , " Batman " , " Heman "  ]  
// marvel_heros.push(dc_heros)  // lets see if the push add the arry in the arry
console.log(marvel_heros);   // now here we see that it add the arry in the arry but it made the dc heros a single arry type it is the 3rd adress now  which is arry itslef
// console.log(marvel_heros[3]);    // see hre if we write for the 3rd element it print the whole dc now becus it store the whole arry in the 3rd place
console.log(marvel_heros[3]);   // as we can see here the 3ed arry is a arry itself we can take out any value form that also 

// we do all this but we know that it store the arry in the arry but not store the whole arry in the single arry in the arry 

// now there is also a another method to store the whole arry in the that is we can concate the arry in the arry 
marvel_heros.concat(dc_heros)
console.log(marvel_heros);    // but but but ther is also a problem why it is still the same it is because it store the whole arry in the new variable  but it is the old variaable we have to add the new variable to store the new variable oterh wise it store the same arry in the arry
const all_heros = marvel_heros.concat(dc_heros)
console.log( " T " , all_heros);   // spo our this program is not working accuratly dont know why

let thehero = [ " my " , " this " , " heros "]
let hehero = [ " your ", " this " , " heros"]
const them = thehero.concat(hehero)
console.log(them);   // bbut as we can see here that our concat make the all variable to be store in one variable it is not like the push which make the arry in arry . it make the arry to the single arry
// // so this simple difference we have to know in this arry types 

// // so here we have a one more spread way to print the 2 arry in the  sinle type and it is a easy way to do this . it is like a glass if we  drop it , its all particle spread every where 
// // as same that it also work

let cartoon = ["oggy", "bheem", "courage the cowardly dog"];
let villen = ["cockroach", "daku", "ghost"];
const all_cartoon = [...cartoon, ...villen];
console.log(all_cartoon);

// so here is one more thing  in the arrry which is also we have to know that about flat function
// it help to concate the many arry in the and in the arry 
let the_many_arry = [ 2 , 4 , 6 ,[ 4 , 5 , 8, [ 4 , 6 , 2 , 8 ]], [ 3 , 5 , 0 ], [ 3 , 6  ,[ 3 , 5 ] , 3 , 8 , 2] ,[ 3,3 ]]   // s0 here you can see a bit confusing arry which is in the arry and arry in the arry and so on 
// so if we want to remove all the sqaure bracket and make them all in once so we have to  use the flat function so that our all arry will be removed .
 let new_many_arry = the_many_arry.flat(3)  // so here we can see that  by giving the property the value is changed now we can see the difference by printing both og them
 console.log(new_many_arry)    // so you can see it print the value of the flat it take all the arry in the one arry 
 console.log(the_many_arry); // here it take  simple arry as we give the code and as i said earlier it is bit hard to read that 

// now some more properties of arry which we have to know for the array
console.log(Array.isArray("Hari"));   //so this is how we can check whether it is arry or  not 
console.log(Array.from("Hari"));  // so by the our from value we can convert the any type of value to the arry 

// so here also how can we make the combine other other variable code in the same arry by only arry function ..... yeah it is  like a spread or the concat but they where the combination og arrys and it is the only the single arrys 
let scoreOfHari = 343
let scoreOfVikram = 3424
let scoreOfVikas = 34334
console.log(Array.of(scoreOfHari , scoreOfVikas ,scoreOfVikram));  // an here you see that all the arry ogf individual are now combined



 
