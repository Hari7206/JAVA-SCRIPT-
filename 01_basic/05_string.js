let course = 'BCA'
let name = " hari ".toUpperCase();
let rollno = 249060
let sec = ' A'
console.log(  course + name + rollno + sec )   // here we see how concatinate our value  // but this is old method to do this we do it in new method 

// so here is our new method to do this string 
/* to use the new method we have to do this steps 
1. we have to use backticks ``  and we call this trick the string interpolation
2 we have to inject our variable using dollar sign ${} in the culy braces
 */
console.log(`my course is ${course} , my name is ${name}  , Roll no is ${rollno} , my sec is ${sec}` )  // so this is a new method call the string intrerpolation method
// here is a new more way to declare the stinng
let gamename = new String('Brutal Gaming')
console.log(gamename[2])   //so this is how we can see the key value pair of any string
console.log(gamename.__proto__)  // this is how we can see it type how our key value pair is arrange
console.log(gamename.length)  // by this we can see our stirng length according to the key value pair
console.log(gamename.toUpperCase()) // this is how we can set the so many function  in our strin we have to master each and every sting function for the better knowladge of the string
console.log(gamename.charAt(3)) // this is how we can know the where the any char lie in value
console.log(gamename.indexOf("t"))
console.log(gamename.substring(1 , 4)) // for the start and end the according to yourself

let NewGameName = "    Brutal Gaming   "
console.log(NewGameName)
console.log(NewGameName.trim())

const url =  " https://www.youtube.com/watch?v=sscX432bMZo " 
console.log(url.replace('watch'  ,   ' plz dont-watch'))

let ThisName = "Hari thapa is a member of this class "   
console.log(ThisName.split(' '));  // so this is how we can spilt any stings according to the sign or space 