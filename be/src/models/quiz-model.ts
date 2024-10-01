import mongoose from 'mongoose';
import { iQuiz } from '../interfaces';

const quizSchema = new mongoose.Schema<iQuiz>({
  courseId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  creatorId: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  questions: [
    {
      quizId: {
        type: String,
        required: true,
      },
      text: String,
      options: [String],
      correctAnswer: Number,
    },
  ],
  title: String,
  updatedAt: Date,
});

const mQuiz = mongoose.model<iQuiz>('Quiz', quizSchema);

export default mQuiz;
