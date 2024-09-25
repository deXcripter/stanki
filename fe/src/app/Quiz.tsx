'use client';

import React, { useState, useEffect } from 'react';
import { QuizQuestion } from '@/types';
import { useAuth } from '@/context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

interface QuizProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const { user, updateUser } = useAuth();

  useEffect(() => {
    if (timeLeft > 0 && !showScore) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleNextQuestion();
    }
  }, [timeLeft, showScore]);

  const handleAnswerClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setTimeLeft(30);
    } else {
      setShowScore(true);
      onComplete(score);
      if (user) {
        updateUser({ points: user.points + score * 10 });
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg"
    >
      {showScore ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-xl mb-4">
            You scored {score} out of {questions.length}
          </p>
          <p className="text-lg">Points earned: {score * 10}</p>
        </motion.div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">
                Question {currentQuestion + 1}
              </h2>
              <motion.div
                className="text-xl font-semibold"
                animate={{ scale: timeLeft <= 5 ? [1, 1.1, 1] : 1 }}
                transition={{
                  repeat: timeLeft <= 5 ? Infinity : 0,
                  duration: 0.5,
                }}
              >
                Time left: {timeLeft}s
              </motion.div>
            </div>
            <p className="text-lg mb-6">
              {questions[currentQuestion].questionText}
            </p>
            <div className="grid grid-cols-1 gap-4">
              {questions[currentQuestion].answerOptions.map((option) => (
                <motion.button
                  key={option.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out"
                  onClick={() => handleAnswerClick(option.isCorrect)}
                >
                  {option.answerText}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default Quiz;
