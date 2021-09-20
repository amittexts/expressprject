var fs = require('fs')


function auth(req, res, next){
    var user = ''
    if(req.method == 'GET'){
        user = req.query.user
    console.log('Username get '+user)
    } 
    if(req.method == 'POST'){
        user = req.body.name
        console.log('Username post '+user)
    }
    console.log('Username is------ '+user)
    if(user == 'amit'){
        req.userInfo = {
            'name': 'ayushya'
        }
        next()
    }else{
        res.status(401).send('Unauthorized')
    }

}
module.exports={auth}