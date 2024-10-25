import { RequestHandler } from 'express';
import asyncHandler from '../../utils/async-handler';
import Resource, { IResource } from '../../models/resource-model';
import AppError from '../../utils/app-error';
import fs from 'fs/promises';
import { resolve } from 'path';
import cloudinary from '../../services/cloudinary-config';

const createResource: RequestHandler = async (req, res, next) => {
  const { title, description, url, type } = req.body as IResource;

  if (!title || !description || !type)
    return next(new AppError('Please provide all fields', 400));

  const newResource = await Resource.create({
    title,
    description,
    url,
    type,
    educator: req.user._id,
  });

  if (req.file) {
    const allowedTypes = 'pdf';
    const fileType = req.file.mimetype.split('/')[1];
    if (!allowedTypes.includes(fileType)) {
      return next(
        new AppError(
          'Please provide a valid file type. Only PDF is allowed',
          400,
        ),
      );
    }
    const uploadedResource = await cloudinary.uploader.upload(
      resolve(req.file.destination + req.file.filename),
      { folder: 'resources/' },
    );

    newResource.url = uploadedResource.secure_url;
    await newResource.save();
    await fs.unlink(resolve(req.file.destination + req.file.filename));
  }

  return res.status(201).json({
    status: 'success',
    data: {
      resource: newResource,
    },
  });
};
export default asyncHandler(createResource);
