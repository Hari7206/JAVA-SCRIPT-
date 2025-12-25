import fs from "fs/promises"

let a = await fs.readFile("Hari.txt")
// this is how we can read and write file by the module type 
console.log(a.toString());
