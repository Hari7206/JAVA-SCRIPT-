const coding = [" js " , " ruby "]

const values = coding.forEach((item) => {
    // console.log(item); 
    return item;
})
// so here we learn that we have for each which did not retrun anything it return us the undefined value 
console.log(values);


let num  = [ 1 , 2, ,3  , 4  , 5 ,  6  , 7 ]
let newnum = num.filter((numss) => {
    return numss > 4
});

// so we understand the  filter that it is used for the return or priting the value with some condition
console.log(newnum);

num.forEach((num) => {
    if (num > 4) {
        newnum.push(num)
    }
})      
console.log(newnum);