import { RequestHandler } from 'express';
import User from '../../models/user-model';
import asyncHandler from '../../utils/async-handler';

const signup: RequestHandler = async (req, res, next) => {
  const { email, password, passwordConfirm } = req.body;

  const payload = { email, password, passwordConfirm };

  await User.create(payload);

  res.send('success');
};

export default asyncHandler(signup);
