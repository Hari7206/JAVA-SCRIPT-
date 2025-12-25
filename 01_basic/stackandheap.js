// so there is a two stac and heap memory 
/* 
so there is a two type of memory 
in stack // the meory store is premitive type
in heap the memory is store is non premitive type
premitve = it is a copy version of anything , it pass the copy value
non primitive = it is a refrence version of any thing if we pass the any variable by it it pass the refrence version
*/


// premitive eg
let myAccountId = "343"
let newId = myAccountId
newId = "3434" // so here we can see if we give the new value to the new id it chnage because  of  in premitivce type the value we got is copy type it chnage when we got the new value of id 
console.log(newId , myAccountId)

// non premitive eg
let yourId = {
    name: "Hari" ,
    roll: 343 ,
    sec: "a"
};
let my = yourId
my.name = "vikas"
console.log(my.name , yourId.name )  // so here our value changed to the new value so from it we can understand that our value ius chaged by the refrence  . but not  id not like oremitve tyope it chnage the both value the  my id and  your id 

