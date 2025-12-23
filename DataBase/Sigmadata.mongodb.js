use ("mydb")
db.createCollection("users")

// creation of the data 


// db.users.insertOne(
//     {
//         Name: "Hari",
//         course: "Sigma web dev",
//         Price: 0,
//         RollNo: 249060,
//         Branch: "Bca",
//         Section: "A"

//     }
// )

// db.users.insertMany([
//   {
//     name: "Ravi",
//     age: 22,
//     email: "ravi@gmail.com",
//     role: "frontend",
//     skills: ["React", "Tailwind", "JavaScript"],
//     isActive: true
//   },
//   {
//     name: "Neha",
//     age: 23,
//     email: "neha@gmail.com",
//     role: "backend",
//     skills: ["Node.js", "MongoDB", "Express"],
//     isActive: false
//   },
//   {
//     name: "Aman",
//     age: 21,
//     email: "aman@gmail.com",
//     role: "fullstack",
//     skills: ["React", "Node.js", "MongoDB"],
//     isActive: true
//   }
// ])


// selection of the data or we can say as the read of the data 
let a = db.users.findOne({isActive: true})
console.log(a);


//  updation of the data 
// db.users.updateOne(
//   { Price: 0 },
//   { $set: { Price: 1000 } }
// )


// deletion of the data 
db.users.deleteOne({ Price: 1000 })





