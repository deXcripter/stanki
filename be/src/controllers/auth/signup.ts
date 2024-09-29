import { RequestHandler } from 'express';
import User from '../../models/user-model';
import asyncHandler from '../../utils/async-handler';
import sendToken from '../../services/sendJwtToken';
import { iUser } from '../../interfaces';

const signup: RequestHandler = async (req, res, next) => {
  const { email, password, passwordConfirm } = req.body;

  const payload = { email, password, passwordConfirm };

  const user: iUser = await User.create(payload);

  return sendToken(user, 201, res);
};

export default asyncHandler(signup);
