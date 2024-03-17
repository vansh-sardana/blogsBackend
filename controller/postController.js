const Post= require("../models/postModel");
const Like = require("../models/likeModel");
const Comment= require("../models/commentModel");

exports.createPost= async(req, res)=>{
    try{
        const {title, body, user}= req.body;
        const newPost= new Post({
            title, body, user
        })
        const savedPost= await newPost.save();

        res.status(200).json({
            message: "Post created successfully",
            success: true,
            post: savedPost
        })
    }
    catch(e){
        res.status(500).json({
            success: false,
            message: e.message,
            data: "Error in creating post"
        })
    }
}

exports.getPosts= async(req, res)=>{
    try{
        
        const posts= await Post.find({}).populate("comments").populate("like").exec();

        res.status(200).json({
            success: true,
            posts
        })
    }
    catch(e){
        res.status(500).json({
            success: false,
            message: e.message,
            data: "Error in fetching posts"
        })
    }
}