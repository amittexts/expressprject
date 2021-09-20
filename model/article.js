var mongoose = require('mongoose')

var articleSchema = new mongoose.Schema({
    "title":{
        type: String,
        unique : true,
        required: true
    },
    "author":{
        type: String,
        required: true
    },
    "category":{
        type: String,
        default: "Technology"
    },
    "deleted":{
        type: String,
        default: "NO",
        enum: ['YES', 'NO']
    }
}, {timestamps: { createdAt: 'created', updatedAt: 'updated'}})

module.exports = mongoose.model('article', articleSchema)