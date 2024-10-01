// src/components/dashboard/student/QuizParticipation.tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

type Question = {
  id: number;
  question: string;
  options: string[];
};

type Quiz = {
  id: number;
  title: string;
  questions: Question[];
};

const mockQuiz: Quiz = {
  id: 1,
  title: 'Sample Quiz',
  questions: [
    {
      id: 1,
      question: 'What is the capital of France?',
      options: ['London', 'Berlin', 'Paris', 'Madrid'],
    },
    {
      id: 2,
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
    },
  ],
};

export const QuizParticipation = () => {
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);

  const startQuiz = () => {
    setCurrentQuiz(mockQuiz);
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
  };

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswers([...selectedAnswers, answerIndex]);
    if (currentQuestionIndex < currentQuiz!.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz completed
      console.log('Quiz completed:', selectedAnswers);
      setCurrentQuiz(null);
    }
  };

  if (!currentQuiz) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Available Quizzes</h2>
        <Button onClick={startQuiz}>Start Sample Quiz</Button>
      </div>
    );
  }

  const currentQuestion = currentQuiz.questions[currentQuestionIndex];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">{currentQuiz.title}</h2>
      <p className="mb-4">
        Question {currentQuestionIndex + 1} of {currentQuiz.questions.length}
      </p>
      <p className="mb-4">{currentQuestion.question}</p>
      <div className="space-y-2">
        {currentQuestion.options.map((option, index) => (
          <Button
            key={index}
            onClick={() => handleAnswer(index)}
            variant="secondary"
            className="w-full text-left"
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};
