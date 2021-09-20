var fs = require('fs')

function logger(req, res, next){
    var userURL = req.url
    console.log('User URL is '+userURL)
    var usermethod = req.method
    console.log('User Method is '+usermethod)
    fs.writeFileSync('./Files/loggerDetails.txt', userURL + " "+ usermethod +'\n', {flag: 'a'})

    //res.send('logger response')
    next()
}
module.exports={logger}