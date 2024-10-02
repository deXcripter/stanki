import { useState, useEffect } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import QuizOptionsTray from './QuizOptionsTray';

interface Quiz {
  id: string;
  title: string;
  description: string;
  instructorId: string;
  instructorName: string;
}

interface QuizListProps {
  instructorId: string;
}

export default function QuizList({ instructorId }: QuizListProps) {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [openQuizId, setOpenQuizId] = useState<string | null>(null);

  useEffect(() => {
    // TODO: Replace with actual API call
    const mockQuizzes: Quiz[] = [
      {
        id: '1',
        title: 'Math Quiz',
        description: 'Test your math skills',
        instructorId: '1',
        instructorName: 'John Doe',
      },
      {
        id: '2',
        title: 'Science Quiz',
        description: 'Explore scientific concepts',
        instructorId: '2',
        instructorName: 'Jane Smith',
      },
      {
        id: '3',
        title: 'History Quiz',
        description: 'Journey through historical events',
        instructorId: '3',
        instructorName: 'Bob Johnson',
      },
    ];
    setQuizzes(mockQuizzes);
  }, []);

  const toggleQuizTray = (quizId: string) => {
    setOpenQuizId(openQuizId === quizId ? null : quizId);
  };

  const filteredQuizzes =
    instructorId === 'all'
      ? quizzes
      : quizzes.filter((quiz) => quiz.instructorId === instructorId);

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {filteredQuizzes.map((quiz) => (
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
              <p className="mt-1 text-sm text-gray-500">
                Instructor: {quiz.instructorName}
              </p>
              {openQuizId === quiz.id && <QuizOptionsTray quizId={quiz.id} />}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
