// call back is used to used to other function in the another function 
function sum(a , b) {
    // console.log( a + b);
}
function calculator (a , b  ,  callback) {
    callback(a , b);
}
calculator( 1 , 3 ,  (a , b) => {
    console.log(a + b);
    
})