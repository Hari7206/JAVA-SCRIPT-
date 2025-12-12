let fs = require("fs")

console.log("Starting");
fs.writeFileSync("Hari.txt" , "Here we write our text of the file ")
fs.writeFile("Hari.txt" , "Here we write our text of the file " , ()=> {
    console.log("done");  
})
fs.readFile("Hari.txt" , (error , data)=>{
    console.log(error , data.toString());
    
})
console.log("Ending");