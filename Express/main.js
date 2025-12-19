const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
  console.log("This is a get request");

  res.send('Hellow world')
}).post('/', (req, res) => {
  console.log("This is a post request");
  res.send('Hewllow world post')
})
//  here w ecan see the chaining of the request 


app.get('/index', (req, res) => {
  res.sendFile('templates/index.html'  , {root: __dirname})
})

app.listen(port, () => {
  console.log(`Example spp listseening on port ${port}`)
})
