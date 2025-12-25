// so in this lesson we are gonna learn about the object lesson/\
/* 
There is a two type of way to defint the object by the help of construction and  by the literal way 
the literal way is a way to print data as normal way in the curly braces
the construction way is a singltetone method to define the object 
*/

// today lesson we are goonna learn about the object by the literal method 

let syb = Symbol (" BRU123 ")
let MyGameData = {
    name: " Brutal Gaming",
    "ReAl Name": "Hari Thapa" ,
    // syb: " Bru124 ",  // syb test
      [syb]: " Bru124 " ,
    ID:   " 5243423434" ,
    Email: " HariThapa4652@gmail.com",
    GameLevel: " 76 " ,
    GameName: " BGMI "
}

// so there is  a two type of way to print the data of the object by the console dot method and by the square bracket method 

// dot method 
console.log(MyGameData.name)
// console.log(MyGameData.ReAL Name)  // so as we can see we can this string action name id by this console point method to tackle this problem we have to use the different method 
console.log(MyGameData.ID)
console.log(MyGameData.Email)
console.log(MyGameData.GameLevel)
console.log(MyGameData.GameName)   
//  so this is our basic way to print the information of the string value 

//  now the other method to print the object id 
console.log(MyGameData["ID"])
console.log(MyGameData["Email"])
console.log(MyGameData["GameLevel"])
console.log(MyGameData["GameName"])
// console.log(MyGameData.syb)  // so here is one more thing if we print the sybol normally it change to the string value 
// console.log( typeof MyGameData.syb) // as we see here our ayb ia  a string now 
console.log(MyGameData[syb]); // this is a right way to print this becuse this is a sytax and it also can be a interview question 
console.log(MyGameData["ReAl Name"])  // so we can see here we can also put the string value to the output in this and it is a right and good way to get the  input of the object
// so this is all about the square brcket syntax and it is the  right way and helpfull way in object to print the object

//***********************************************  some basic about the object  **************************************************************/


// we can also add the new value to the our old ids in the object
 MyGameData.Email = "hari.saitm123"  // so this is how we can change the any value to new value in the js object
 console.log(MyGameData)   // this output shows that our email is changed from harithapa4652 to harisaitm

 // now we also have a function so that no one can change our value 

// Object.freeze(MyGameData)  //  this is the code now our value cant be change even if other one try to give the new value to it 
// MyGameData.Email =  " YOur1234@gmail.com"
// console.log(MyGameData);  // so  you can see the difference by the removing or adding the object.freeze function .  now our  output didt change beacuse  of the object feeze function

// lets add the fucntion in the object 

 MyGameData.Greeting = function(){
    console.log("Namste Dosto ");
}
MyGameData.Greetingtwo = function(){
  console.log(`Hello to the java script user ${this.name}`);
  
}
console.log(MyGameData.Greeting);  // so there is also two type to print the function but with the prenthisis it only call the function and show us the function
console.log(MyGameData.Greeting());  // In this we can see it print the proper our function value  so we have to print this type of function always
console.log(MyGameData.Greetingtwo());  // so this is our bactics tecnique we already learn in the string but here is a  onr more way to add the object any value in the string inetrpoletion

