import express from "express";
const app = express()
const port = 3000


// so this is post req we post 
app.get('/', (req, res) => {
  res.send('Hellow there this is my post request opening!')
})
app.get('/home', (req, res) => {
  res.send('This is my home page!')
})
app.get('/About', (req, res) => {
  res.send('I am hari thapa founder of the silent voice where we can do many stuff ')
})
app.get('/Contactme', (req, res) => {
  res.send('SO this is my contact no if your want to contact me  -> 98765 *****!')
})
app.get('/login', (req, res) => {
  res.send('YOu can log in here if you are new in this page !')
})
app.get('/Blog', (req, res) => {
  res.send('here you can post your blog')
})
//  so this all up in the are quaries we are posing our rewq but we don't do it like this other wise it did not lokking so much good that why we use the express js it make the work easy for us and make the code more easy to read 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


