const article = require('../model/article')

function addArticle(req, res) {
    var title = req.body.title
    var author = req.body.author
    var category = req.body.category


    //**********turnary operator
    var deleted = req.body.deleted ? req.body.deleted : 'NO'
    // if(req.body.deleted){
    //     var deleted = req.body.deleted
    // }else{
    //     var deleted = 'NO'
    // }

    var saveArticle = new article({
        "title": title,
        "author": author,
        "category": category,
        "deleted": deleted
    })
    saveArticle.save((err, data) => {
        if (err) {
            console.log(err)
            res.status(400).send('Error in Saving Data')
        } else {
            res.status(200).json({
                succes: true,
                data: data
            })
        }
    })

}
function articleList(req, res) {
    var {author, title, category, deleted} = req.query
    var filters = {deleted: 'NO'}
    if(author){
        filters.author = author
    }
    if(title){
        filters.title = title
    }
    if(category){
        filters.category = category
    }
    if(deleted){
        filters.deleted = deleted
    }
    //$or: [{ author: author}, {title: title}, {category: category}]
    article.find(filters, (err, data) => {
        if (err) {
            console.log(err)
            res.status(400).send('Error in fetching data')
        } else {
            res.status(200).json({
                sucess: true,
                data: data
            })
        }
    })
}
function updateArticle(req, res){
    var {articleId} = req.params
    var {title, category, author, deleted } = req.body
    article.findByIdAndUpdate(articleId, {title: title, category: category, author: author, deleted: deleted}, {new: true}, (err, data)=>{
        if(err){
            console.log(err)
            res.status(401).send('error in update')
        }else{
            console.log(data)
            res.status(200).json({
                succes: true,
                data: data
            })
        }
    })    
}
function deleteOneArticle(req, res){
    var{articleId} = req.params
    article.deleteOne({_id: articleId}, (err, data)=>{
        if(err){
            console.log(err)
            res.status(401).send('Article not deleted')
        }else{
            res.status(200).send('Article deleted')
        }
    })
}
function deletManyArticles(req, res){
    var {articleArr} = req.body
    article.deleteMany({_id: {$in:articleArr}}, (err, data)=>{
        if(err){
            console.log(err)
            res.status(401).send('Error in deleting articles')
        }else{
            res.status(200).send('Articles deleted successful')
        }
    })
}

module.exports = {addArticle, articleList, updateArticle, deleteOneArticle, deletManyArticles}