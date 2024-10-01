import jwt from 'jsonwebtoken';
import { Response } from 'express';
import { iUser, iEnv } from '../interfaces';
import AppError from '../utils/app-error';

const signToken = (id: string, role: string, name: string) => {
  const secret = (process.env as unknown as iEnv).JWT_SECRET;
  if (!secret)
    throw new AppError(
      'JWT_SECRET is not defined in environment variables',
      500,
    );

  const jwtExpiry = process.env.JWT_EXPIRES_IN || '1d';

  const payload = { id, role, name };

  const token = jwt.sign(payload, secret, {
    expiresIn: jwtExpiry,
  });

  return token;
};

const createCookieOptions = () => {
  const expiresInDays = parseInt(process.env.JWT_EXPIRES_IN || '1');

  const cookieOptions = {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * expiresInDays),
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'lax' as const, // Protects against CSRF by restricting cross-origin requests
  };

  return cookieOptions;
};

const sendToken = (user: iUser, statusCode: number, res: Response) => {
  const token = signToken(user._id, user.role, user.name);

  res.cookie('jwt', token, createCookieOptions());

  return res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user: {
        id: user._id,
        role: user.role,
        email: user.email,
      },
    },
  });
};

export default sendToken;
