import express from 'express';
import createQuiz from '../controllers/quiz/create-quiz';
const router = express.Router();

router.route('/').post(createQuiz);

export { router as quizRouter };
