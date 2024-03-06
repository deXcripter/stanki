import { RequestHandler } from 'express';

export const signup: RequestHandler = (req, res, next) => {
  console.log('hi');
  return res.status(400).json({ status: 'success' });
};
