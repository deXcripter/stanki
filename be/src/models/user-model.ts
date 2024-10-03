import mongoose from 'mongoose';
import validator from 'validator';
import { iUser } from '../interfaces';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema<iUser>({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    minlength: 4,
    required: true,
    maxlength: 25,
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
    select: false,
  },
  passwordChangedAt: {
    type: Date,
    select: false,
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
});

userSchema.methods.comparePassword = async function (
  candidatePassword: string,
  userPassword: string,
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPassword = function (JWTTimestamp: number) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      (this.passwordChangedAt.getTime() / 1000).toString(),
      10,
    );
    return JWTTimestamp < changedTimestamp;
  }
  return false;
};

const User = mongoose.model<iUser>('User', userSchema);

export default User;
