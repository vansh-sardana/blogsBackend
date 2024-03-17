const Post = require("../models/postModel");
const Like= require("../models/likeModel");

exports.likePost= async(req, res)=>{
    try{
        const {post, user}= req.body;

        const newLike= new Like({
            "id": post,
            "user": user
        });

        const savedLike= await newLike.save();

        const updatedPost= await Post.findByIdAndUpdate(post, {$push: {like: savedLike._id}}, {new: true})
        .populate("like").populate("comments").exec();

        res.status(200).json({
            post: updatedPost
        })
    }
    catch(e){
        res.status(500).json({
            success: false,
            message: e.message,
            data: "Error in liking post"
        })
    }
};

exports.unlikePost= async(req, res)=>{
    try{
        const {post, like}= req.body;

        const delLike= await Like.findByIdAndDelete({post,_id: like});
        const updatedPost= await Post.findByIdAndUpdate(post, {$pull: {like: delLike._id}}, {new: true})
        .populate("like").populate("comments").exec();

        res.status(200).json({
            post: updatedPost
        })
    }
    catch(e){
        res.status(500).json({
            success: false,
            message: e.message,
            data: "Error in unliking post"
        })
    }
}