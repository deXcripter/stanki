import { Document } from 'mongoose';

export default interface iUser extends Document {
  email: string;
  name: string;
  role: string;
  password: string;
  passwordConfirm: string | undefined;
  passwordChangedAt: Date;
  passwordResetToken: string;
  passwordResetExpires: Date;
  active: boolean;
  _id: string;
  createdAt: Date;
}
