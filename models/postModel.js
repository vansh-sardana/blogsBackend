const mongoose= require("mongoose");

const postSchema= new mongoose.Schema({
    "user":{
        type: String,
        required: true
    },
    "title": {
        type: String,
        required: true, 

    },
    "body": {
        type: String,
        required: true, 
        maxLength: 50
    },
    "like": [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like"
    }],
    "comments": [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
})

module.exports= mongoose.model("Post", postSchema);