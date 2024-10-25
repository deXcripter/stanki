import { RequestHandler } from 'express';
import Resource from '../../models/resource-model';
import asyncHandler from '../../utils/async-handler';

const getCourseResources: RequestHandler = async (req, res, next) => {
  const resources = await Resource.find({ educator: req.user.id });
  res.status(200).json({
    status: 'success',
    data: { resources },
  });
};

export default asyncHandler(getCourseResources);
