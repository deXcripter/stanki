// src/components/QuizOptionsTray.tsx
import { UserGroupIcon, UserIcon } from '@heroicons/react/solid';

interface QuizOptionsTrayProps {
  quizId: string;
}

export default function QuizOptionsTray({ quizId }: QuizOptionsTrayProps) {
  const handleCompete = () => {
    // TODO: Implement competition logic
    console.log(`Competing in quiz ${quizId}`);
  };

  const handleSolo = () => {
    // TODO: Implement solo quiz logic
    console.log(`Starting solo quiz ${quizId}`);
  };

  return (
    <div className="mt-4 flex space-x-4">
      <button
        onClick={handleCompete}
        className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <UserGroupIcon className="mr-2 h-5 w-5" />
        Compete
      </button>
      <button
        onClick={handleSolo}
        className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        <UserIcon className="mr-2 h-5 w-5" />
        Solo Quiz
      </button>
    </div>
  );
}
