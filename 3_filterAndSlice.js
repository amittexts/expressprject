var express = require('express')
var {products} = require('./data')
var app = express()
console.log('Server started');

app.get('/products', (req, res)=>{
    var{name, limit} = req.query
    var returnarray = products
    if(name){
         returnarray = returnarray.filter((data)=>{
             return data.name.startsWith(name)
         })
    }
    if(limit){
        returnarray = returnarray.slice(0, Number(limit))
    }
    if(returnarray.length != null){
        res.status(200).json(returnarray)
    }else{
        res.status(200).send('No Data Found')
    }
    
})

app.listen(3000)