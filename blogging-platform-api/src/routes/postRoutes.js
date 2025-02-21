import express from "express"
import {
    createPost,
    getAllPosts,
    getPost,
    updatePost,
    deletePost
} from "../controllers/postControllers.js"

const router = express.Router()

router.route("/")
    .get(getAllPosts)
    .post(createPost)

router.route('/:id')
    .patch(updatePost)
    .delete(deletePost)
    .get(getPost)


export default router
