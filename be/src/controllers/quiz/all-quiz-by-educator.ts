import { RequestHandler } from 'express';
import Quiz from '../../models/quiz-model';
import { iPagination } from '../../interfaces';
import asyncHandler from '../../utils/async-handler';
import AppError from '../../utils/app-error';

const getAllQuizByEducator: RequestHandler = async (req, res, next) => {
  let {
    page = '0',
    limit = '10',
    educatorId,
  } = req.query as {
    page: string;
    limit: string;
    educatorId: string;
  };

  if (req.user.role === 'educator') educatorId = req.user.id;
  if (!educatorId) return next(new AppError('Educator ID is required', 400));

  const startIndex = (Number(page) - 1) * Number(limit);
  const endIndex = Number(page) * Number(limit);
  const skip = parseInt(page) * parseInt(limit);

  const quizzes = await Quiz.find({ creatorId: educatorId })
    .skip(skip)
    .limit(parseInt(limit));
  const total = await Quiz.countDocuments({ creatorId: educatorId });

  const pagination: iPagination = {
    totalItems: total,
    totalPages: Math.ceil(total / parseInt(limit)),
    currentPage: parseInt(page),
    hasNextPage: endIndex < total,
    pageSize: parseInt(limit),
    hasPrevPage: startIndex > 0,
  };

  return res.status(200).json({
    status: 'success',
    data: {
      quizzes,
      pagination,
    },
  });
};

export default asyncHandler(getAllQuizByEducator);
