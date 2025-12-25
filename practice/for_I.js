/*
so here we are gonna see the for in loop . for in is mainly used to show the keys of the object so it is mainly used for the object 
*/
let consumer = {
    Product : "Tablet" , 
    Price :  6999 ,
    Quantity : 4 + "pcs" ,
    isPurches : true 
}
for (const key in consumer) { // so in the for in  we used the key keyword in the for in loop which we used to show that we take the key pair
     console.log("key = " + key , "value : " +  consumer [key] ); // here by doing consumer key we are saying to code to print the every single value of the consumer key so it print the item also
     
}