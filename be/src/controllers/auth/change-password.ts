import { RequestHandler } from 'express';
import asyncHandler from '../../utils/async-handler';
import AppError from '../../utils/app-error';

const changePassword: RequestHandler = async (req, res, next) => {
  const { currentPassword, newPassword, newPasswordConfirm } = req.body;
  if (await req.user.comparePassword(currentPassword, req.user.password)) {
    req.user.password = newPassword;
    req.user.passwordConfirm = newPasswordConfirm;

    await req.user.save();
    return res.status(200).json({
      status: 'success',
      message: 'Password updated successfully',
    });
  }

  return next(new AppError('Incorrect password', 401));
};

export default asyncHandler(changePassword);
