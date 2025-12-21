const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

// so this is the middle ware we have the main purpose of the middle ware is use to make the update next request 
// app.use(express.static("public"))


// so as we can see we use the app.use to use the middle ware here we can we have 3 thing in our middle ware the request we have to send the response and the next so here the next means we are saying this middle ware done now we pass to the next one and then the other one will run the the our main route handler run means before going to the route handler it first go to the middleware then it will go to the next and if we did not use the next then our middle ware will got stuck in one middleware and our next did not work 

app.use((req, res, next) => {
console.log("this is the m1 ");
    fs.appendFileSync("log.txt" , `The time user log in ${Date.now()}\n`)
  console.log(`The time user log in ${Date.now()}`)
  next()
})
// so as we can see here every time we upaate our site the middle ware alwys update our request so we can use this in this type 


app.use((req, res, next) => {
    console.log("this is the m2");
    
  console.log('Time:', Date.now())
  next()
})

// so this is the route handler of our 
app.get('/', (req, res) => {
  res.send('Hello World this is middle ware we are learning !')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
