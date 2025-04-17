// call back hell is  the nest call back which we call as call back hell. it is like the when we doing a log in any website we have to enter the id so our site check on the server if this is avialable or not on the websie then after id check it check the password exist or these is done by the function and in that we have to put the call back so that we can pass the call back in that 

function database (getid , settime ) {
    setTimeout(() => {
        console.log("id is = " , getid);
        if(settime) {
            settime()
        }
    } , 2000)
}
// this type of call back  call the callback hell . this is not easy to understand 
    database(45 , () => {
    console.log(" getting data ready 2....");
        database(67 , () => {
            console.log("getting data ready of 3...");
            
            database(56)
        })
    }); 
  // this is our normal code what if we have to print the different data base type like id after it password . this type for that how we will write the code if we have to give the delay in every phase . so normal code use the code just print the differnet ids

// like
// database(4);       <====
// database(4);  
// database(4);  // so here this does not work even thatt this will print before the upper function to print every fucntion before the before fucntion we have to use the different stage of the call back which is known as the call back hell ;


