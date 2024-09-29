import mongoose from 'mongoose';
import validator from 'validator';
import { iUser } from '../interfaces';

const userSchema = new mongoose.Schema<iUser>({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    minlength: 4,
    required: true,
    maxlength: 20,
    validate: {
      validator: (v: string) => validator.isEmail(v),
      message: (props: { value: string }) =>
        `${props.value} is not a valid email`,
    },
  },

  role: {
    type: String,
    enum: ['student', 'educator', 'admin'],
    required: true,
    default: 'student',
  },

  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },

  // auth
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  passwordConfirm: {
    type: String,
  },
});

const User = mongoose.model<iUser>('User', userSchema);

export default User;
