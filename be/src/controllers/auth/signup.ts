import { RequestHandler } from 'express';
import User from '../../models/user-model';
import asyncHandler from '../../utils/async-handler';
import sendToken from '../../services/sendJwtToken';
import { iUser } from '../../interfaces';
import AppError from '../../utils/app-error';

const signup: RequestHandler = async (req, res, next) => {
  const { email, password, role, name } = req.body;

  if (!email || !password)
    return next(new AppError('Please provide email and password', 400));

  const payload = {
    email,
    password,
    name,
    role: role || 'student',
  };

  const user: iUser = await User.create(payload);

  return sendToken(user, 201, res);
};

export default asyncHandler(signup);
