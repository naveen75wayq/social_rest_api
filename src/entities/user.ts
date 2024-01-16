import mongoose, { Schema, model } from 'mongoose';

export interface UserDocument extends Document {
  username: string;
  email: string;
  password: string;
  posts: Schema.Types.ObjectId[]; // Assuming posts contain MongoDB ObjectIds
}
const userSchema = new Schema<UserDocument>({
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

const User = model<UserDocument>('User', userSchema);

export default User;
