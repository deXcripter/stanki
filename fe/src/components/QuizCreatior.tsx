'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QuizQuestion } from '@/types';

const QuizCreator: React.FC = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion>({
    id: '',
    questionText: '',
    answerOptions: [
      { id: '1', answerText: '', isCorrect: false },
      { id: '2', answerText: '', isCorrect: false },
      { id: '3', answerText: '', isCorrect: false },
      { id: '4', answerText: '', isCorrect: false },
    ],
  });

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentQuestion({ ...currentQuestion, questionText: e.target.value });
  };

  const handleAnswerChange = (id: string, value: string) => {
    setCurrentQuestion({
      ...currentQuestion,
      answerOptions: currentQuestion.answerOptions.map((option) =>
        option.id === id ? { ...option, answerText: value } : option,
      ),
    });
  };

  const handleCorrectAnswerChange = (id: string) => {
    setCurrentQuestion({
      ...currentQuestion,
      answerOptions: currentQuestion.answerOptions.map((option) => ({
        ...option,
        isCorrect: option.id === id,
      })),
    });
  };

  const handleAddQuestion = () => {
    if (
      currentQuestion.questionText &&
      currentQuestion.answerOptions.every((option) => option.answerText)
    ) {
      setQuestions([
        ...questions,
        { ...currentQuestion, id: Date.now().toString() },
      ]);
      setCurrentQuestion({
        id: '',
        questionText: '',
        answerOptions: [
          { id: '1', answerText: '', isCorrect: false },
          { id: '2', answerText: '', isCorrect: false },
          { id: '3', answerText: '', isCorrect: false },
          { id: '4', answerText: '', isCorrect: false },
        ],
      });
    }
  };

  const handleSubmitQuiz = () => {
    // Here you would typically send the questions to your backend
    console.log('Quiz submitted:', questions);
    // Reset the form
    setQuestions([]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-4">Create a New Quiz</h2>
      <div className="mb-4">
        <input
          type="text"
          value={currentQuestion.questionText}
          onChange={handleQuestionChange}
          placeholder="Enter question"
          className="w-full p-2 border rounded"
        />
      </div>
      {currentQuestion.answerOptions.map((option) => (
        <div key={option.id} className="mb-2 flex items-center">
          <input
            type="text"
            value={option.answerText}
            onChange={(e) => handleAnswerChange(option.id, e.target.value)}
            placeholder={`Answer ${option.id}`}
            className="flex-grow p-2 border rounded mr-2"
          />
          <label className="flex items-center">
            <input
              type="radio"
              name="correctAnswer"
              checked={option.isCorrect}
              onChange={() => handleCorrectAnswerChange(option.id)}
              className="mr-2"
            />
            Correct
          </label>
        </div>
      ))}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleAddQuestion}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Add Question
      </motion.button>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Quiz Preview</h3>
        {questions.map((q, index) => (
          <div key={q.id} className="mb-4 p-4 border rounded">
            <p className="font-bold">
              {index + 1}. {q.questionText}
            </p>
            <ul className="list-disc list-inside">
              {q.answerOptions.map((option) => (
                <li
                  key={option.id}
                  className={option.isCorrect ? 'text-green-600' : ''}
                >
                  {option.answerText}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {questions.length > 0 && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSubmitQuiz}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
        >
          Submit Quiz
        </motion.button>
      )}
    </motion.div>
  );
};

export default QuizCreator;
