import { RequestHandler } from 'express';
import asyncHandler from '../../utils/async-handler';
import Resource from '../../models/resource-model';

const deleteCourse: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  await Resource.findByIdAndDelete(id);

  res.status(204).json({
    status: 'success',
    data: null,
  });
};

export default asyncHandler(deleteCourse);
