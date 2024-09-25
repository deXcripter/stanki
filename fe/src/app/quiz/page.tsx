'use client';

import React, { useState, useEffect } from 'react';
import Quiz from '@/components/Quiz';
import { QuizQuestion } from '@/types';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const mockQuizQuestions: QuizQuestion[] = [
  {
    id: '1',
    questionText: 'What is the capital of France?',
    answerOptions: [
      { id: '1a', answerText: 'New York', isCorrect: false },
      { id: '1b', answerText: 'London', isCorrect: false },
      { id: '1c', answerText: 'Paris', isCorrect: true },
      { id: '1d', answerText: 'Dublin', isCorrect: false },
    ],
  },
  {
    id: '2',
    questionText: 'Who is CEO of Tesla?',
    answerOptions: [
      { id: '2a', answerText: 'Jeff Bezos', isCorrect: false },
      { id: '2b', answerText: 'Elon Musk', isCorrect: true },
      { id: '2c', answerText: 'Bill Gates', isCorrect: false },
      { id: '2d', answerText: 'Tony Stark', isCorrect: false },
    ],
  },
  {
    id: '3',
    questionText: 'The iPhone was created by which company?',
    answerOptions: [
      { id: '3a', answerText: 'Apple', isCorrect: true },
      { id: '3b', answerText: 'Intel', isCorrect: false },
      { id: '3c', answerText: 'Amazon', isCorrect: false },
      { id: '3d', answerText: 'Microsoft', isCorrect: false },
    ],
  },
];

export default function QuizPage() {
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    } else {
      // In a real application, you would fetch quiz questions from an API
      setQuizQuestions(mockQuizQuestions);
    }
  }, [user, router]);

  const handleQuizComplete = (score: number) => {
    // In a real application, you would send the score to an API to update user's stats
    console.log(`Quiz completed with score: ${score}`);
  };

  if (!user || quizQuestions.length === 0) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Take a Quiz</h1>
      <Quiz questions={quizQuestions} onComplete={handleQuizComplete} />
    </div>
  );
}
