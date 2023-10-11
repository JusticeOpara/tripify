import { Schema, model, models } from "mongoose";

const PostSchema = new Schema({

  title: {
    type: String,
    required: ["Please provide a title"],
  },
  content: {
    type: String,
    required: ["please Provide a content"],
  },
  img: {
    type: String,
    required: ["Please provide an image"],
  },
  date: {
    type: Date,
    default:Date.now
  },
  Number: {
    type: Number,
    default: Math.floor(Math.random() * 1000)
  }
});

const Post = models.post || model("Post", PostSchema)
export default Post
