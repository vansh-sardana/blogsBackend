const express= require("express");
const { dummy } = require("../controller/dummyRoute");
const { createComment } = require("../controller/commentController");
const { likePost, unlikePost } = require("../controller/likeController");
const { createPost, getPosts } = require("../controller/postController");
const router= express.Router();

router.get('/dummyroute', dummy);
router.post('/comments/create', createComment);
router.post('/likes/like', likePost);
router.post('/likes/unlike', unlikePost);
router.post('/posts/create', createPost);
router.get('/posts', getPosts);
module.exports= router;