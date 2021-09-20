var express = require('express')
var {logger} = require('./4_loggerMiddleware')
var {auth} = require('./5_authMiddleware')
var morgan = require('morgan')
var app = express()

app.use(morgan('tiny'))
app.use('/api', [logger, auth])
app.get('/', (req, res)=>{
    res.status(200).send('home page')
})
app.get('/about', (req, res)=>{
    res.status(200).send('about')
})
app.get('/api/products', (req, res)=>{
    res.status(200).send('Products')
})
app.get('/api/items', (req, res)=>{
    res.status(200).send('Items')
})

app.listen(3000)