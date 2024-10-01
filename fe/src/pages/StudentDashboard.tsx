// src/pages/StudentDashboard.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import QuizList from '../components/QuizList';
import LeaderBoard from '../components/Leaderboard';
import Badge from '../components/Badge';
import CourseList from '../components/CourseList';

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('quizzes');

  const badges = [
    {
      name: 'Quick Learner',
      description: 'Completed 5 quizzes',
      imageUrl: 'https://example.com/badge1.png',
    },
    {
      name: 'Math Whiz',
      description: 'Scored 100% on Math Quiz',
      imageUrl: 'https://example.com/badge2.png',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Student Dashboard
          </h1>
          <nav>
            <Link to="/profile" className="text-blue-600 hover:text-blue-800">
              Profile
            </Link>
          </nav>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                <button
                  onClick={() => setActiveTab('quizzes')}
                  className={`${
                    activeTab === 'quizzes'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  Quizzes
                </button>
                <button
                  onClick={() => setActiveTab('courses')}
                  className={`${
                    activeTab === 'courses'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  Courses
                </button>
                <button
                  onClick={() => setActiveTab('leaderboard')}
                  className={`${
                    activeTab === 'leaderboard'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  Leaderboard
                </button>
                <button
                  onClick={() => setActiveTab('badges')}
                  className={`${
                    activeTab === 'badges'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  Badges
                </button>
              </nav>
            </div>
            <div className="mt-6">
              {activeTab === 'quizzes' && <QuizList />}
              {activeTab === 'courses' && <CourseList />}
              {activeTab === 'leaderboard' && <LeaderBoard />}
              {activeTab === 'badges' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {badges.map((badge, index) => (
                    <Badge key={index} {...badge} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
