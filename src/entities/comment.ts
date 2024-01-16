
import mongoose, { Schema, model, Document } from 'mongoose';
const commentSchema = new Schema({
  commentId: {
    type: String,
    required: true,
    unique: true,
  },
  author:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  
  
},{timestamps: true});

const Comment = model('Comment', commentSchema);

export default Comment;
