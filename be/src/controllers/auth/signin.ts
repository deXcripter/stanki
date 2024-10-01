import { RequestHandler } from 'express';
import asyncHandler from '../../utils/async-handler';
import User from '../../models/user-model';
import sendToken from '../../services/sendJwtToken';
import AppError from '../../utils/app-error';

const signin: RequestHandler = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.comparePassword(password, user.password)))
    return next(new AppError('Incorrect email or password', 401));

  return sendToken(user, 200, res);
};

export default asyncHandler(signin);
