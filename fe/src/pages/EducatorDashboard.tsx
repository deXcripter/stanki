// src/pages/EducatorDashboard.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  PencilAltIcon,
  UploadIcon,
  BookOpenIcon,
  ChartBarIcon,
  UserCircleIcon,
  ChartPieIcon,
} from '@heroicons/react/outline';
import QuizCreator from '../components/QuizCreator';
import LeaderBoard from '../components/Leaderboard';
import CourseMaterialUploader from '../components/CourseMaterialUploader';
import CourseList from '../components/CourseList';
import QuizAnalytics from '../components/QuizAnalytics';

export default function EducatorDashboard() {
  const [activeTab, setActiveTab] = useState('create-quiz');

  const tabs = [
    { id: 'create-quiz', name: 'Create Quiz', icon: PencilAltIcon },
    { id: 'upload-material', name: 'Upload Material', icon: UploadIcon },
    { id: 'course-materials', name: 'Course Materials', icon: BookOpenIcon },
    { id: 'leaderboard', name: 'Leaderboard', icon: ChartBarIcon },
    { id: 'analytics', name: 'Analytics', icon: ChartPieIcon },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`${
                      activeTab === tab.id
                        ? 'border-indigo-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                  >
                    <tab.icon className="mr-2 h-5 w-5" />
                    {tab.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <Link
                to="/profile"
                className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <UserCircleIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              Educator Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg min-h-96 overflow-auto p-4">
                {activeTab === 'create-quiz' && <QuizCreator />}
                {activeTab === 'upload-material' && <CourseMaterialUploader />}
                {activeTab === 'course-materials' && <CourseList />}
                {activeTab === 'leaderboard' && <LeaderBoard />}
                {activeTab === 'analytics' && <QuizAnalytics />}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
