/*  so in array we can save multiple value in signle variable
* the variable can be int , string or any sign 
* in the array the adress initilize from the o index 
* so if we have to print the value we can start normally we have to print in the square value by its int index value 
*  our arry makes the sallwo copy  of the arry 
* if you dont know there is a TWO type of copy sallow and the deep as according to the premitve and the non premitibve type  */



// ********************************* BASIC *************************************************************************
let IntArry = [  249031  ,  249044  ,  249060]  // this is our int arry how we  can set the only number arraye 
let AnimeArry = [ "poweer ranegr " , " ninja hattori"  , " sinchan"]   // thid is how we can set the only styring arry
let arry = [ " Hari " , " vishvas " , " Batla " , " 106 "]    // so this is how we can write the any value in the arry  we can write the string and the int value 
let Arraymy = new Array(3 , 4 ,5 ,5 )  // in this we already declare the varable to the array so no need to use square bracket 
console.log(arry[2]);   // this is how we can print the adress of the value 4
console.log(IntArry[2]); 
console.log(Arraymy[2]); 
console.log(AnimeArry[2]);  

/* if we open this arry in the chrome inspect 
let IntArry = [ " 249031 " , " 249044 " , " 249060"]
we will get all this function and its prototype 
and also its prototype ke bhi prototype */


// ******************************* Array  Method ******************************************************

IntArry.push(249004)  // here our push make a new valuee value in the our old arry
IntArry.pop()  // so this is use to remove the arry from the right side
IntArry.unshift(0) // it can add new arry in the left sidde of any arry
IntArry.shift()  // it can remove any arry from the left side
console.log(IntArry);  
arry.unshift("vikram")  // here an example of the unshift in the string type arry 
console.log(arry);

// more questionimg operation of arry in java is
console.log(IntArry.includes(249032));  // so by this we can she that is any value is added or not if yes it show true if no it show the false 
console.log(arry.includes("vikram"));  // as its output it say yes so we can say that it has added this string value that why it is showing yes 
console.log(IntArry.indexOf(249060));  // in this it show the arry index of in which number of adress our arry lies we can already use it in our string function


let meraArry =  IntArry.join()  // so  by this we can join our old value to new value in a string type there is other method also but we can type by this type also it our arry type function
console.log(meraArry); // so here we can see that the output is same but its is not in the square bracket it is as normal type number as it is the string value
console.log(typeof meraArry);   // here we can see by the type of that our value is not converted into the string value 

// now we are gonna learn about the slice and the splice in the array 
let sliArry = [ 2 , 5 , 7 , 8 , 3 , 1]
let Ne1arr = sliArry.slice( 2 , 4 )  // so in our slice it show us the value from the number we start and end and the our orignal value remain  the same
console.log( " A " , sliArry); // this shows our orignal output which is stil the same 
console.log( " * " , Ne1arr);  // it show the value it take which is a copy of the number of adress we put to take of 

let Ne2arr = sliArry.splice( 2 , 5 )   // in our splice it shows the value by taking the orignal value from the first value we put
console.log( " B " , sliArry);   // here it shows that our value is changed now it only shows the 2 , 5 because the other value is cut and then paste to the new variable 
console.log( " * " , Ne2arr);  //  here it shows the cut value that we take 

// this is a spread arry of the asrry 2
let cartoon = ["oggy", "bheem", "courage the cowardly dog"];
let villen = ["cockroach", "daku", "ghost"];
const all_cartoon = [...cartoon, ...villen];
console.log(all_cartoon);     // so here we can see that spread store the all arry individually in the one arry is is the easy way to store the arry in one arry  and better way to write then the concat and push









