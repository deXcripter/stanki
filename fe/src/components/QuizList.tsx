// src/components/QuizList.tsx
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import QuizOptionsTray from './QuizOptionsTray.tsx';

interface Quiz {
  id: string;
  title: string;
  description: string;
}

export default function QuizList() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([
    {
      id: '1',
      title: 'CSC 452',
      description: 'Test your Knowledge on Expert Systems',
    },
    {
      id: '2',
      title: 'CSC 462',
      description: 'Computer Graphics Quiz',
    },
    {
      id: '3',
      title: 'CSC 412',
      description: 'Computer Networks Quiz',
    },
  ]);

  const [openQuizId, setOpenQuizId] = useState<string | null>(null);

  const toggleQuizTray = (quizId: string) => {
    setOpenQuizId(openQuizId === quizId ? null : quizId);
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {quizzes.map((quiz) => (
          <li key={quiz.id}>
            <div className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {quiz.title}
                </h3>
                <button
                  onClick={() => toggleQuizTray(quiz.id)}
                  className="ml-2 p-2 text-gray-400 hover:text-gray-500"
                >
                  {openQuizId === quiz.id ? (
                    <ChevronUpIcon className="h-5 w-5" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
              <p className="mt-1 text-sm text-gray-500">{quiz.description}</p>
              {openQuizId === quiz.id && <QuizOptionsTray quizId={quiz.id} />}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
