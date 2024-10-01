import { Document } from 'mongoose';

export default interface iUser extends Document {
  email: string;
  name: string;
  password: string;
  passwordConfirm: string | undefined;
  passwordChangedAt: Date;
  passwordResetToken: string;
  passwordResetExpires: Date;
  active: boolean;
  _id: string;
  id: string;
  role: 'student' | 'educator';
  bio: string;
  createdAt: Date;
  updatedAt: Date;

  comparePassword(
    candidatePassword: string,
    userPassword: string,
  ): Promise<boolean>;
}
