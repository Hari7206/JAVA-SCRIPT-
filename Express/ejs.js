const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let name = "DailyBlog"
    let searchText = "Search Now"
  res.render("main" , {SiteName: name , searchText: searchText})
})

//  so we use the ejs for the using the template we can put our template varaible with the help of the ejs easily 

app.get('/blog', (req, res) => {
      let name = "DailyBlog"
    let BlogTitle = "Welcome user "
    let searchText = "Here you can write the text as you want to write "
    // so the thing is we have to edit this blogtitle and the searchtext in the this file like so this show in the html and all 
  res.render("Blog" , {Title: BlogTitle , text: searchText , SiteName: name})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})