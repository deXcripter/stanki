import { Document } from 'mongoose';

export default interface iUser extends Document {
  email: string;
  fullName: string;
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
  changedPassword(JWTTimestamp: number): boolean;
}

// declare module 'express-serve-static-core' {
//   interface Request {
//     user: iUser;
//   }
// }

declare global {
  namespace Express {
    interface Request {
      user: iUser;
    }
  }
}
