import { RequestHandler } from 'express';
import asyncHandler from '../../utils/async-handler';
import User from '../../models/user-model';

const editProfile: RequestHandler = async (req, res, next) => {
  const payload = req.body as {
    fullName: string;
    email: string;
    bio: string;
  };

  const allowedFields = {
    fullName: payload.fullName || req.user.fullName,
    email: payload.email || req.user.email,
    bio: payload.bio || req.user.bio,
  };

  await User.findByIdAndUpdate(req.user._id, allowedFields, {
    new: true,
  });

  return res.status(200).json({ status: 'success' });
};

export default asyncHandler(editProfile);
