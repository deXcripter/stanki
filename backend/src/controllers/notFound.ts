import { RequestHandler } from 'express';
import appError from '../utils/appError';

const notFound: RequestHandler = (req, res, next) => {
  return next(new appError('This route does not exist', 404));
};

export default notFound;
