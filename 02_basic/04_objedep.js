// In this lesson we  gonnna learn about the singleton object or the construction object
// to declare the object we use 
let Newid = new Object()    // we can  use this // only the differnce is it is the singleton object
console.log(Newid);   // as we can see it pass the empty value 

let newid = {}
console.log(newid);   // here we can it  also pass the empty value the only difference is that it is not a singleton value

// lets learn more about this values we can give the function direct only by the using of the point 
newid.name = " Hari "
newid.rollno = " 249060 "
newid.batch = " BCA - 1st year "
newid.studentstatus = " hosteler  "
console.log(newid);  // so as we can see here that our all detail is filled in the our object by the giving only the point value of this 

// now we can learn that we can use the nested object ....... it means we can use the object ke ander the object 

let NesteObj = {
    MyGameData: {
        MyGameName: {
            MYGameUsername: " Brutal Gaming"      // here we see our one object store the another object so we can print by the giving point in the point of the object 
            }
        }
    }
    console.log(NesteObj);  // so it print he all funtion in it 
    console.log(NesteObj.MyGameData); // it is the fucntion of fucntion but it print the function after it 
console.log(NesteObj.MyGameData.MyGameName); /// it is the function of the fucntion of the fucnton 
console.log(NesteObj.MyGameData.MyGameName.MYGameUsername);  // it is all last function so it print itself becuz it did not have any other function in it know 

// now lets see how to make the group of the object as we done befor  in the array we also have to make the group in the object also 

let obj1 = { name: "Hari"  , class: "BCA" , Section: "A"}
let obj2 = { nam: "Vishwas"  , kaksa: "BCA" , sec: "A"}
let obj3 = { nume: "Pratik"  , killas: "BCA" , secc: "A"}
let obj6 = { num: "Ayush"  , glsss: "AI ML" , sect: "A"}
// so this is a four group now we have to make this in a single object so we can see it in the group 

let obj7 = Object.assign(obj1 , obj2 , obj3 , obj6);  // so this is how we put the value so that our group will be made   // but we use thiss not that much
// we give the one empty box so that our all value target to that becuz it make the copy of the all object and make the first one the target and why would we put the target to the obj1 so that why we will give the empty target so that our all copy value assign to that
console.log(obj7) // now we put the console to the obj5 so all our value will be printed
// we use this spread tech to code this group object so that it make easy of our code 
const obj8 = { ...obj1 , ...obj2 , ...obj3 , ...obj6}
// we give the one empty box so that our all value target to that becuz it make the copy of the all object and make the first one the target and why would we put the target to the obj1 so that why we will give the empty target so that our all copy value assign to that
console.log(obj8) // this is how in the spread tech we did not need to give the any object cuz it automatically just print the object


// now we see that we have to also write the our object in the arry for the data base 
let ouruser = [
    {
        id: 2 ,
        isloggedin: false
    } ,
    {
        id: 3 ,
        isloggedin: true
    } ,
    {
        id: 4 ,
        isloggedin: false
    } ,
    {
        id: 5 ,
        isloggedin: true
    } ,
]
console.log(ouruser[3])   // so this is how we can write the any value in the arry so that it work for our databases

// no we see that we have to take keys in the object so that it turn in the arry and we can take and apply loop in that so if we have to aplly loop we have to know this technique 
console.log(Object.keys(newid)) // this is how we can take keys the for making the loop 
console.log(Object.values(newid)) // this is how we can take the value also so we can make the loop easily 
console.log(obj1.hasOwnProperty('class'))  // so this is how  we can check the that our value has anything or not so it does not make any problem while making the loop 



