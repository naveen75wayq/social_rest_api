import mongoose, { Schema, model } from 'mongoose';


const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  posts:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ]

});

const User = model('User', userSchema);

export default User;