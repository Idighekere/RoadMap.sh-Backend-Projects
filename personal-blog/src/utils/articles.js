const matter = require('gray-matter');
const fs = require('fs');
const fsPromise = require('fs').promises;
const path = require('path')
const marked = require('marked')

class ArticleActions {
    constructor(directory) {
        this.directory = directory
    }

    async createArticle(data) {

        try {
            const { title, content } = data
            const date = new Date().toISOString()
            const slug = title.split(' ').join('-').toLowerCase()

            const frontMatter = {
                title,
                date,
                author: "Idighs",
                lastModified: date,
                slug: slug
            }

            const fileContent = matter.stringify(content, frontMatter)
            // console.log(fileContent)
            const fileName = `${slug}.md`

            const filePath = path.join(this.directory, fileName)


            // if (fs.existsSync(filePath)) {
            //     throw new Error("Article with that title already exist");

            // }
            // console.log(filePath)
            await fs.writeFile(filePath, fileContent, { 'encoding': 'utf-8' }, (err) => console.log(err))
            return { slug }
        } catch (error) {
            console.error(error)
        }
    }

    async getSingleArticle(slug) {
        try {
            const fileName = `${slug}.md`
            const filePath = path.join(this.directory, fileName)

            if (!fs.existsSync(filePath)) {
                throw new Error("Article not found");

            }

            const fileContent = await fsPromise.readFile(filePath, { encoding: 'utf-8' })

            const { data, content } = matter(fileContent)

            // console.log(content, data)

            const htmlContent = marked.parse(content);


            return {
                data,
                content: htmlContent,
                rawContent: content
            };


        } catch (error) {
            console.error('Error getting article', error)
        }
    }

    async updateArticle(slug, data) {
        const { title, content } = data

        const articleExists = await this.getSingleArticle(slug)

        // console.log(articleExists)
        if (articleExists) {

            const frontMatter = {
                ...articleExists.data,
                lastModified: new Date().toISOString(),
                title,

            }

            const fileContent = matter.stringify(content, frontMatter)
            const fileName = `${slug}.md`

            const filePath = path.join(this.directory, fileName)

            await fs.writeFile(filePath, fileContent, { 'encoding': 'utf-8' }, (err) => console.log(err))


        }

    }

    async deleteArticle(slug) {
        try {
            const fileName = `${slug}.md`

            const filePath = path.join(this.directory, fileName)

            await fsPromise.unlink(filePath)
        } catch (error) {
            console.error(error)
            throw new Error('Error deleting post', error)
        }
    }

    async getAllArticles() {

        const files = await fsPromise.readdir(this.directory)

        const articles = await Promise.all(
            files.map(async (file) => {
                try {
                    const filePath = path.join(this.directory, file)

                    const fileContents = await fsPromise.readFile(filePath, 'utf-8'
                    )

                    const { data } = matter(fileContents)

                    return data
                } catch (error) {
                    console.error(error)
                }
            })
        )

        // console.log(articles)
        return articles.sort((a, b) => new Date(b.date) - new Date(a.date))


    }
}

const action = new ArticleActions(path.join(__dirname, '../articles'))
module.exports = action
