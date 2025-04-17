// so our promise basically used for the to reslove the conflict data of the callback 
// we can learn the promise as the amazone promise where it give us promise to diliver the parcel and we blindly trust that wihtout any doub so like that we have to promise in this resolve and the reject which is itself a call back from the obj promise
// let promise = new Promise((reslove , reject) => {
//     console.log(" this is solved now ");
//     // reslove("  your dilivery is sucess now ")  
//     reject ("  haat broskike ")// now here we can call any type of the of fucntion in this like we have three type of state in the promise where if we did not call anything it will show us the pending and if we give any kind of fucntion like if we give the relove it show us sucess or if we give the reject it will show us error 
// })
function database (getid , settime ) {
    return new Promise( (resolve , reject) =>  {
        setTimeout(() => {
            resolve("done bro");
            console.log("id is = " , getid);
            if(settime) {
                settime()
            }
        } , 5000)
    })
    
}