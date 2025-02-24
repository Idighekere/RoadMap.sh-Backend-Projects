const express = require('express');
const path = require('path');
const action = require('./src/utils/articles');
const adminRoutes = require('./src/routes/adminRoutes');
const authMiddleware = require('./src/utils/authMiddleware');
const dotenv = require('dotenv')
dotenv.config()

const app = express()

//Middleware
app.use(express.urlencoded({ extended: true }))
app.set("views", path.join(__dirname, "src", "views"));
app.set('view engine', 'ejs')

app.use(express.static('public'));
app.use((req, res, next) => {
    // Checking if the current route starts with /admin
    res.locals.isAdminRoute = req.path.startsWith('/admin');
    next();
});

app.get('/', async (req, res) => {
 res.redirect("/articles")

})

app.get('/articles', async(req,res)=>{
    const articles = await action.getAllArticles()
    // console.log(articles)
    res.render('articles/lists', { articles })
})


app.get('/articles/:slug', async (req, res) => {
    const { slug } = req.params


    try {
        const article = await action.getSingleArticle(slug)

        if (!article) {
            res.status(404).render('error', { error: "Article not found" })
        }
        res.render('articles/single', { article });

    } catch (error) {

        console.error('Err', error)
    }
})

app.use(authMiddleware)
app.use('/admin/', adminRoutes)


// app.all('*', (req, res) => {

//     res.render('error', { message: "An error occurred" })
// })
app.listen(3000, () => {
    console.log("App listening at port 3000")
})
