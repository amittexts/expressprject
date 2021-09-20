var express = require('express')
var {multiply} = require('./2_multiply')
console.log('Express Starting....')

var app = express()
/************Methodes under app**********************/
// app.get 
// post 
// put 
// delete 
// use 
// listen 
// all 
app.get('/', (req, res)=>{
    console.log('home reached')
    res.status(200).send('homepage')
    /******Methods under res */
    // res.sendFile -> images, doc etc
    // res.json
    // res.render-> server side rendering
    
})
app.get('/about', (req, res)=>{
    console.log('about reached')
    res.status(200).send('about')
})
app.get('/multiply', (req, res)=>{
    var number1 = req.query.num1
    var number2 =req.query.num2
    res.status(200).send(`multiplication is ${multiply(number1, number2)}`)
})
app.all('*', (req, res)=>{
    console.log('This URL is not available')
    res.status(404).send('<h1>Not found</h1>')
})
app.listen(3000, ()=>{
    console.log('Server is running on 3000')
})
