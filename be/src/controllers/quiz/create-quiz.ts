import { RequestHandler } from 'express';
import asyncHandler from '../../utils/async-handler';
import { iQuiz } from '../../interfaces';
import Quiz from '../../models/quiz-model';

const createQuiz: RequestHandler = async (req, res, next) => {
  const { title, description, questions, courseId } = req.body;

  const payload = {
    title,
    description,
    questions,
    courseId,
    creatorId: req.user.id,
  };

  const quiz: iQuiz = await Quiz.create(payload);

  return res.status(201).json({
    status: 'success',
    data: {
      quiz,
    },
  });
};

export default asyncHandler(createQuiz);
