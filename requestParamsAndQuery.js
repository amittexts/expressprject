var express = require('express')
var {products, people} = require('./data')

var app = express()
app.get('/', (req, res)=>{
    res.status(200).send('<h1>Home page</h1></br><a href="/products">Products</a></br><a href="/people">People</a>')
})

app.get('/products', (req, res)=>{
    var newproductarray = products.map((data)=>{
        var{id, name, price} = data
        return {id, name, price}
    })
    res.status(200).json(newproductarray)
})
app.get('/people', (req, res)=>{
    res.status(200).json(people)
})
app.get('/productdetails/:id', (req, res)=>{
    console.log(req.params)
    var productdetailarray = products.find((data)=>{
        return data.id === Number(req.params.id)
    })
    if(!productdetailarray){
        res.status(404).send('<h1>Product Not Found</h1>')
    }else
        res.status(200).json({productID: productdetailarray.id, productName: productdetailarray.name, productPrice: productdetailarray.price})
})
app.all('*', (req, res)=>{
    res.status(404).send('Not Found')
})
app.listen(3000)
