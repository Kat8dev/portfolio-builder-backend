import { Schema, model } from 'mongoose';

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
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
    userPhoto: {
      type: String,
    },
    desc: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    portfolioId: {
      type: String,
      unique: true,
    }
  },
  {
    timestamps: true,
  }
);

const User = model('User', UserSchema);

export default User;
