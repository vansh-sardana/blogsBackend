const Comment= require("../models/commentModel");
const Post= require("../models/postModel");

exports.createComment= async(req, res)=>{
    try{
        const {post, user, body}= req.body;
        const comment= new Comment({
            post,user,body
        });
        const savedComment =await comment.save();
        const updatedPost= await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id}}, {new: true})
                            .populate("comments").exec();

        res.status(200).json({
            data: updatedPost
        })
    }
    catch(e){
        res.status(500).json({
            success: false,
            message: e.message,
            data: "Error in fetching data"
        })
    }
}