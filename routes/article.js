const express = require('express')
const {addArticle, articleList, updateArticle, deleteOneArticle, deletManyArticles} = require('../controller/article')

const articleRouter = express.Router()

  articleRouter.post('/add', addArticle )
  articleRouter.get('/list', articleList)
  articleRouter.put('/update/:articleId', updateArticle)
  articleRouter.delete('/delete/:articleId', deleteOneArticle)
  articleRouter.delete('/delete', deletManyArticles)

module.exports = articleRouter