var express = require('express')
var mongoose = require('mongoose')
var {db} = require('./config')
var articleRouter = require('./routes/article')


var app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("we are connected");
  })
app.use('/article', articleRouter)
  app.listen(3000)