import mongoose from "mongoose"
import { generateRandomString } from "../utils/helpers.js"

const postSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, 'The post title is required'],
        minLength: 3
    },
    slug: {
        type: String,
        unique: true
    },
    content: {
        type: String,
        required: [true, 'The post content is required']
    },
    category: {
        type: String,
        enum: ["Technology", "Sports", "Business", "General"]
    },
    tags: {
        type: [String],
    }
}, { timestamps: true })

postSchema.pre('save', function () {

    const slug = this.title.split(" ").join("-").toLowerCase()

    const randomString = generateRandomString()
    console.log(randomString)
    this.slug = `${slug}-${randomString}`
})


postSchema.index({ '$**': 'text' })

const Post = mongoose.model('Post', postSchema)

export default Post
