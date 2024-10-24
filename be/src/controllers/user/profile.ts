import { RequestHandler } from 'express';
import asyncHandler from '../../utils/async-handler';

const getUser: RequestHandler = async (req, res, next) => {
  res.status(200).json({ message: 'success', data: req.user });
};

export default asyncHandler(getUser);
