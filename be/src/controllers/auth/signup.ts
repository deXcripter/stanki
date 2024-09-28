import { RequestHandler } from 'express';

const signup: RequestHandler = async (req, res, next) => {
  const { email, password, passwordConfirm } = req.body;

  res.send('success');
};

export default signup;
