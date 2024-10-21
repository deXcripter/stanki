import { RequestHandler } from 'express';
import asyncHandler from '../../utils/async-handler';
import Resource from '../../models/resource-model';
import AppError from '../../utils/app-error';

const createResource: RequestHandler = async (req, res, next) => {
  const { title, description, url, type, topic } = req.body;

  if (!title || !description || !url || !type || !topic)
    return next(new AppError('Please provide all fields', 400));

  if (
    type.toLowerCase() !== 'video' &&
    type.toLowerCase() !== 'file' &&
    type.toLowerCase() !== 'image'
  )
    return next(new AppError('Invalid resource type', 400));

  const newResource = await Resource.create({
    title,
    description,
    url,
    type,
    topic,
    user: req.user._id,
  });

  return res.status(201).json({
    status: 'success',
    data: {
      resource: newResource,
    },
  });
};
export default asyncHandler(createResource);
