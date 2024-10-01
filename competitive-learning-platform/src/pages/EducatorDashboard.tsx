// src/pages/EducatorDashboard.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import QuizCreator from '../components/QuizCreator';
import LeaderBoard from '../components/Leaderboard';
import CourseMaterialUploader from '../components/CourseMaterialUploader';

export default function EducatorDashboard() {
  const [activeTab, setActiveTab] = useState('create-quiz');

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Educator Dashboard
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
                  onClick={() => setActiveTab('create-quiz')}
                  className={`${
                    activeTab === 'create-quiz'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  Create Quiz
                </button>
                <button
                  onClick={() => setActiveTab('upload-material')}
                  className={`${
                    activeTab === 'upload-material'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  Upload Material
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
              </nav>
            </div>
            <div className="mt-6">
              {activeTab === 'create-quiz' && <QuizCreator />}
              {activeTab === 'upload-material' && <CourseMaterialUploader />}
              {activeTab === 'leaderboard' && <LeaderBoard />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
