import jwt from 'jsonwebtoken';
import { RequestHandler } from 'express';
import User from '../models/user-model';
import AppError from '../utils/app-error';
import { iEnv, iUser } from '../interfaces';
import asyncHandler from '../utils/async-handler';

const protect: RequestHandler = async (req, res, next) => {
  const [type, token] = (req.headers.authorization || '').split(' ');
  if (!token) return next(new AppError('Invalid token. Please login', 401));
  if (type.toLowerCase() !== 'bearer' || !token) {
    return next(
      new AppError('You are not logged in. Please login to get access', 401),
    );
  }

  jwt.verify(token, (process.env as unknown as iEnv).JWT_SECRET);
  const decoded = jwt.decode(token);

  const user = await User.findById((decoded as any).id).select(
    '+passwordChangedAt +role',
  );

  if (!user) {
    return next(new AppError('This token is invalid. Please login', 401));
  }

  if ((user as unknown as iUser).changedPassword((decoded as any).iat)) {
    return next(new AppError('This token is invalid. Please login', 401));
  }

  req.signedCookies = decoded as any;
  req.user = user;
  next();
};

export default asyncHandler(protect);
