import { RequestHandler } from 'express';
import asyncHandler from '../../utils/async-handler';
import User from '../../models/user-model';
import AppError from '../../utils/app-error';

const editProfile: RequestHandler = async (req, res, next) => {
  const payload = req.body as {
    fullName: string;
    email: string;
    bio: string;
  };

  const existingEmail = await User.findOne({
    email: payload.email,
    _id: { $ne: req.user._id },
  });
  if (existingEmail)
    return next(new AppError(`${payload.email} is already taken`, 400));

  const allowedFields = {
    fullName: payload.fullName || req.user.fullName,
    email: payload.email || req.user.email,
    bio: payload.bio || req.user.bio,
  };

  const newUser = await User.findByIdAndUpdate(req.user._id, allowedFields, {
    new: true,
  });

  return res.status(200).json({ status: 'success', user: newUser });
};

export default asyncHandler(editProfile);
