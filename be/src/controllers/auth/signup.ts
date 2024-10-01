import { RequestHandler } from 'express';
import User from '../../models/user-model';
import asyncHandler from '../../utils/async-handler';
import sendToken from '../../services/sendJwtToken';
import { iUser } from '../../interfaces';

const signup: RequestHandler = async (req, res, next) => {
  const { email, password, passwordConfirm, educator } = req.body;

  const payload = {
    email,
    password,
    passwordConfirm,
    role: educator ? 'educator' : 'student',
  };

  const user: iUser = await User.create(payload);

  return sendToken(user, 201, res);
};

export default asyncHandler(signup);
