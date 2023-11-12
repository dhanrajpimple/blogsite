const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:[true,"Please add a title for the blog"]  ,
        },
        description:{
            type:String,
            required:[true, "pls add description"],
        },
        image:{
            type:String,
            required:[true, "image is required"],
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:[true, "model is required"]
        }
    },
    {timestamps: true}
);

const blogModel = mongoose.model("blog", blogSchema);
module.exports = blogModel;