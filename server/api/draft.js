const express = require('express')
const router = express.Router()
const db = require('../db/db.js')

// 保存草稿
router.post('/api/draft', (req, res) => {
    const article = {
        title: req.body.title,
        content: req.body.content,
        date: Date(),
        tags: req.body.tags,
        category: req.body.category,
        isPublish: false
    }
    new db.Article(article).save()
    res.status(200).send('succeed in saving new draft')
})

// 更新草稿
router.patch('/api/draft/:aid', (req, res) => {
    const aid = req.params.aid
    const article = {
        title: req.body.title,
        tags: req.body.tags,
        date: Date(),
        content: req.body.content,
        category: req.body.category,
        isPublish: false
    }
    db.Article.update({aid: aid}, article, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).send('succeed in updating ---' + data.title)
        }
    })
})

// 获取所有的草稿
router.get('/api/drafts', (req, res) => {
    const page = req.query.payload.page
    const limit = req.query.payload.limit - 0 || 8
    const skip = limit * (page - 1 )
    db.Article.find({isPublish: false}).sort({date: -1}).limit(limit).skip(skip).exec().then(async(articles) => {
        const count = await db.Article.count({isPublish: false})
        res.send({ data: articles, total: count })
    }).catch((err) => {
        console.log(err)
    })
})

module.exports = router