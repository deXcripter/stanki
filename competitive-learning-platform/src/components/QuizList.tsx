// src/components/QuizList.tsx
import { useState, useEffect } from 'react';

interface Quiz {
  id: number;
  title: string;
  questions: number;
}

export default function QuizList() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  useEffect(() => {
    // TODO: Fetch quizzes from API
    const mockQuizzes: Quiz[] = [
      { id: 1, title: 'Math Quiz', questions: 10 },
      { id: 2, title: 'Science Quiz', questions: 15 },
      { id: 3, title: 'History Quiz', questions: 20 },
    ];
    setQuizzes(mockQuizzes);
  }, []);

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {quizzes.map((quiz) => (
          <li key={quiz.id}>
            <a href="#" className="block hover:bg-gray-50">
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-blue-600 truncate">
                    {quiz.title}
                  </p>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {quiz.questions} questions
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
