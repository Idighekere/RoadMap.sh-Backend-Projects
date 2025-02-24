const express = require('express')
const action = require('../utils/articles')
const router = express.Router()

router.get('/',(req,res)=>{

    res.redirect('/admin/dashboard')
})

router.get('/dashboard', async (req, res) => {


    try {
        const articles = await action.getAllArticles()

        res.render('admin/dashboard', { articles })
    } catch (error) {
        res.render('error', { message: error })
    }
})

router.get('/articles/new', (req, res) => {
    res.render('admin/create');
});

router.post('/articles', async (req, res) => {

    try {
        const { title, content } = req.body

        const { slug } = await action.createArticle({ title, content })
        console.log(slug)

        res.redirect(`/articles/${slug}`)
    } catch (error) {
        res.render('admin/create', {
            error: 'Failed to create article',
            formData: req.body
        });
    }

})


router.get('/articles/:slug/edit', async (req, res) => {

    try {
        const { slug } = req.params

        const article = await action.getSingleArticle(slug)
        // console.log(article)
        res.render('admin/update', { article })
    } catch (error) {
        console.error(error)
        res.render('error', { message: error.message })
    }
})

router.post('/articles/:slug/delete', async (req, res) => {
    try {

        const { slug } = req.params

        await action.deleteArticle(slug)

        res.redirect('/admin/dashboard')

    } catch (error) {
        console.error(error)
        res.render('error', { message: error })
    }

})

router.post('/articles/:slug', async (req, res) => {
    try {

        const { title, content } = req.body
        const { slug } = req.params

        await action.updateArticle(slug, { title, content })

        res.redirect(`/articles/${slug}`)
    } catch (error) {

    }
})

module.exports = router
