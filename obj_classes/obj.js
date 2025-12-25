// so today we got to know more about the object
let detail = {
    name: "Hari",
    exam: "eco",
    marks: 45 ,
    markstype() {
        console.log("marks is" , markstype);  // so in the console we have different already declare prototye 
    }
}

//   in the array there is a proptype is already define in the js we also make anything as the protype 
let company = {
    tax (){
        console.log("every employ get the 10% of the tax"); 
    },
};

let employ1 = {
    salary: 10000,
    name: "123"
};
let employ2 = {
    salary: 50000,
    name: "abc"
};
let employ3 = {
    tax () {
        console.log(" for this person the tax will be of 5%");
    },
    salary: 20000,
    name: "xyz"
};
let employ4 = {
    salary: 90000,
    name: "hari"
};

employ1.__proto__ = company;  // so this is the basic of how we will make the any other object fucntion to the other function prototype from which we can use the other object fuction in the other object . it make the work easy to do so 


// last thing about the prototype is if we have the same function in the proto type function and in the main object where we get the other object function so if they both clash the main will take its fucntion isted of the other object proto type 
employ3.__proto__ = company;  
