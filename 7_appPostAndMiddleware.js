var express = require('express')
var {auth} = require('./5_authMiddleware')



var app = express()

app.use(express.urlencoded({extended:false}))
app.use(auth)
app.post('/login', (req, res) => {
    console.log(req.userInfo)
    res.status(200).send('login Verified')
})

app.listen(3000)
