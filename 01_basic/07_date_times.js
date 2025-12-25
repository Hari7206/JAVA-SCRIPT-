// so today we are gonna learn about how we can set the date and times in the java script 
let Mydate = new Date;
console.log(Mydate);    // so here we can see that output has come to date and time . but we can read this all because of the date format'

// now we learn we can set the string value to the mydate 

console.log(Mydate.toString());    // here we can see we can add the string value to it 

// there are more function in the string value we can add it to in the sting
console.log(Mydate.toISOString())  // in this our time is normal
console.log(" first ")
console.log(Mydate.toJSON()) // in this it conmes at same as normal to srting value
console.log("second")
console.log(Mydate.toLocaleDateString())  // in this it comes only  date  as normal form
console.log("third")
console.log(Mydate.toLocaleString())    // in this our date and time also appper 
console.log("fourth")
console.log(Mydate.toUTCString())     // in this our day  and date print in the output 
console.log("fifth");
console.log(Mydate.toDateString())    // in this our normal date and time comes 

// we can also declare our made date by writing our code no need of date  if we want to print to print the specific date and time \
let NewDate =  new Date (2004 , 3  , 14 )
console.log(`my name is hari and my dob is this ${NewDate.toDateString()}`);

// we can print and write the our code of date in differ style we have many sintax to print the date and the time also by ourself
let NewStyle = new Date ( "2004-04-14")  // this is how we can set the date in differ way . here we use the yy-mm-dd method 
console.log(NewStyle.toDateString());
let NewStylee = new Date ("04-14-2004"); 
console.log(NewStylee.toDateString());    // so here we can use this method to print  the normal indian method date which we usally use for the normal day life  but here we have print the mm-dd yy method little differ from our normal date style 

// we can also set the time in the our output 
let DateTime  = new Date ( 2004 , 0  , 14 ,  5 ,  30)
console.log(DateTime.toLocaleString());    // so this how  we can save the date and time by ourself in the java script

// so in our js we can also set the time stamp for the competition or store the  accurate time of any time
let MYtimeStamp = Date.now()    // by the time. now here our milli seocnd output willl come by this this help us in many this 
console.log(MYtimeStamp);     //  now our output come in  milliosecond
console.log(DateTime.getTime());   // so by this get time function we can get the time of any varibale 

console.log(Date.now()/1000)   // so this value of comes in the decimal value to print its in the number we can set the math to it so it value doesnt print in the decimal
console.log(Math.floor((Date.now()/1000)))  // so here  our smallest value is print by the help of the floor 
console.log(Mydate.getTime())

// let SampleDate = new Date( 2004 , 3  , 14)
// console.log( `my DOB is ${SampleDate.toLocaleString()}`);     this is my sample practice 
// let theStamp = Date.now()
// console.log(Math.floor((Date.now()/1000)));     so this is my sample of the current time stamp 

let ForDate = new Date()
console.log(ForDate)   // as we know this is how we casn get a time and date in default value but there is a more way to write this as tolocalestring to writ the specific date or months only 
console.log(ForDate.getDate())    // with this type of the get function we can ghet any thing time date milli second for our fucntion 
console.log(ForDate.getTime())     // from this we can get the time 
console.log(ForDate.getDay())   //  by this function we can the day of the date current 
console.log(ForDate.getUTCFullYear())     // from this we caan get the utc type date and etc there is many typoe of get function like this from which we can type many thing

// now a good version of this lets type all in one function
console.log(` this is the date ${ForDate.getDate()}  of my java practice  , and the day is ${ForDate.getDay()}. by six it means saturday `)   

console.log(ForDate.toLocaleString('default' , { weekday: "long",}))   // this is a also a way of to write the local type but in this we have to write a long code and we have to specify each and every detail in this 
console.log(ForDate.toLocaleDateString('default' , { month: "narrow"}));










