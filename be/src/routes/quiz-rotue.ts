import express from 'express';
import createQuiz from '../controllers/quiz/create-quiz';
import protect from '../middlewares/protect';
const router = express.Router();

router.route('/').post(protect, createQuiz);

export { router as quizRouter };
