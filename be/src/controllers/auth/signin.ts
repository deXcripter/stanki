import { RequestHandler } from 'express';
import asyncHandler from '../../utils/async-handler';
import User from '../../models/user-model';
import sendToken from '../../services/sendJwtToken';

const signin: RequestHandler = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.comparePassword(password, user.password)))
    return next(new Error('Incorrect email or password'));

  return sendToken(user, 200, res);
};

export default asyncHandler(signin);
