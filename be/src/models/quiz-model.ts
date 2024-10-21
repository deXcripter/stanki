import mongoose from 'mongoose';
import { iQuiz } from '../interfaces';

const quizSchema = new mongoose.Schema<iQuiz>({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  creatorId: {
    type: String,
    required: true,
  },
  questions: [
    {
      question: String,
      options: [String],
      correctAnswer: Number,
    },
  ],
  title: String,
  updatedAt: Date,
  registeredStudents: [String],
});

const Quiz = mongoose.model<iQuiz>('Quiz', quizSchema);

export default Quiz;
