import { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
  tittle: {
    type: String,
    required: ["Please provide a title"],
  },
  content: {
    type: String,
    required: ["please Provide a content"],
  },
  image: {
    type: String,
    required: ["Please provide an image"],
  },
  date: {
    type: Date,
    default:Date.now

  },
});
const Post = models.post || model("Post", PostSchema)
export default Post
