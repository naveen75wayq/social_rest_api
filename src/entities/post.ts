import mongoose, { Schema, model, Document } from 'mongoose';

const postSchema = new Schema({
  postId: {
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    url: String,
    filename: String,
  },
  discription: {
    type: String,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  comments: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
  },
  likes: {
    count: {
      type: Number,
      default: 0,
    },
    authors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      }
    ]
  }

}, { timestamps: true });

const Post = model('Post', postSchema);

export default Post;
