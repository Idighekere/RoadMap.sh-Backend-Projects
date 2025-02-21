import Post from "../models/Posts.js"
import { catchAsync } from "../utils/catchAsync.js"
import ErrorResponse from "../utils/ErrorResponse.js"
import { SuccessResponse } from "../utils/SuccessResponse.js"

const getPostBySearchTerm = catchAsync(async (req, res, next) => {

    const { term } = req.query

    let filter = {}


    req.filter = filter
    next()
})

const createPost = catchAsync(async (req, res, next) => {

    const { title, content } = req.body

    const post = await Post.create(req.body)

    SuccessResponse(res, 201, post)
})


const getAllPosts = catchAsync(async (req, res, next) => {

    const { term } = req.query
    let query = {}
    if (term) {
        query = { $text: { $search: term } }
    }
    const posts = await Post.find(query).sort({ createdAt: -1 })

    SuccessResponse(res, 200, posts)
})

const getPost = catchAsync(async (req, res, next) => {

    const { id } = req.params

    const post = await Post.findOne({ _id: id })

    if (!post) {
        return next(new ErrorResponse("Post does not exist", 404))
    }

    SuccessResponse(res, 200, post)


})

const updatePost = catchAsync(async (req, res, next) => {

    const { id } = req.params
    const updatedPost = await Post.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })

    if (!updatedPost) {
        return next(new ErrorResponse("Post does not exist", 404))
    }

    SuccessResponse(res, 200, updatedPost)
})

const deletePost = catchAsync(async (req, res, next) => {

    const { id } = req.params
    const deletedPost = await Post.findByIdAndDelete(id)

    if (!deletedPost) {
        return next(new ErrorResponse("Post does not exist", 404))
    }

    SuccessResponse(res, 204, {})
})

export {
    createPost,
    getAllPosts,
    getPost,
    updatePost,
    deletePost
}
