import express from 'express';
import {
  createQuiz,
  deleteQuiz,
  getAllQuizByEducator,
} from '../../controllers/quiz';
const router = express.Router();

router.route('/').post(createQuiz).get(getAllQuizByEducator);
router.route('/:id').delete(deleteQuiz);

export { router as educatorQuizRouter };
