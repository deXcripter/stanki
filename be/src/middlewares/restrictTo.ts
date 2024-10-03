import { RequestHandler } from 'express';
import AppError from '../utils/app-error';

const restrictTo = (...role: string[]) => {
  const restrcitFn: RequestHandler = (req, res, next) => {
    if (!role.includes(req.user.role)) {
      return next(
        new AppError('You do not have permission to perform this action', 403),
      );
    } else return next();
  };

  return restrcitFn;
};

export default restrictTo;
