let score = 343   // so here this is how nornmally we can set the number value
let NewScore = new Number(score)  // this is how we can set the particular type  of type to java script
console.log(score);    
console.log(NewScore)
 
let marks = 324
console.log(marks.toString().charAt(2));   //  this is how we can set the function to the string value   // becuz it a string now we can set the string function on it 
console.log(typeof marks)
console.log(marks.toFixed(3));   // this is used for 

let horsepower = 343.323
console.log(horsepower.toPrecision(2));

let ZeroDigit = 1000000000
console.log(ZeroDigit.toLocaleString());    // it is use to locale the string measn if we have to much zero in our code so it used to  take comma according to indian number system

                                                   
                                                //******************                 maths             ************************ */
console.log(Math);   // here it shows the math is a object it self
console.log(Math.round(32.6))      // from round we the round of value  of its
console.log(Math.ceil(343.9));      // ceil is type of sealimg which work on after point number if its less then 5 then the rounf of is normal if greater then 6 then its is greater then 1 num
console.log(Math.floor(343.9));      // this works  as the floor which depend on number not the after point matter
console.log(Math.abs(-4));   // here in the abselute value we can set the absalute value to change the minus number into the + number 
console.log(Math.sqrt(4));   // this tell the what sqrt is what
console.log(Math.max(2,3,4,5));
console.log(Math.min(2,3,4,5));


// here comes our random value for the using to make the random nunber system]
console.log(Math.random());
console.log((Math.random() * 10)+ 2)

let min = 10
let max = 20 

console.log(Math.floor((Math.random() * ( max - min +1 )))+ 10)