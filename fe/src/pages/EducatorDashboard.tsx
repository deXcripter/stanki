// src/pages/EducatorDashboard.tsx
import { Link } from 'react-router-dom';
import { Tab } from '@headlessui/react';
import {
  PencilAltIcon,
  UploadIcon,
  ChartBarIcon,
  UserCircleIcon,
  ChartPieIcon,
  CollectionIcon,
} from '@heroicons/react/outline';
import QuizCreator from '../components/QuizCreator';
import LeaderBoard from '../components/Leaderboard';
import CourseMaterialUploader from '../components/CourseMaterialUploader';
import QuizAnalytics from '../components/QuizAnalytics';
import EducatorResources from '../components/EducatorResources';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function EducatorDashboard() {
  const tabs = [
    { name: 'Create Quiz', icon: PencilAltIcon },
    { name: 'Upload Material', icon: UploadIcon },
    { name: 'My Resources', icon: CollectionIcon },
    { name: 'Leaderboard', icon: ChartBarIcon },
    { name: 'Analytics', icon: ChartPieIcon },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Educator Dashboard
          </h1>
          <Link
            to="/profile"
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <UserCircleIcon className="h-6 w-6 mr-2" />
            Profile
          </Link>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Tab.Group>
          <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
            {tabs.map((tab) => (
              <Tab
                key={tab.name}
                className={({ selected }) =>
                  classNames(
                    'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                    selected
                      ? 'bg-white shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                  )
                }
              >
                <div className="flex items-center justify-center">
                  <tab.icon className="w-5 h-5 mr-2" />
                  {tab.name}
                </div>
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            <Tab.Panel className="bg-white rounded-xl p-3">
              <QuizCreator />
            </Tab.Panel>
            <Tab.Panel className="bg-white rounded-xl p-3">
              <CourseMaterialUploader />
            </Tab.Panel>

            <Tab.Panel className="bg-white rounded-xl p-3">
              <EducatorResources />
            </Tab.Panel>
            <Tab.Panel className="bg-white rounded-xl p-3">
              <LeaderBoard />
            </Tab.Panel>
            <Tab.Panel className="bg-white rounded-xl p-3">
              <QuizAnalytics />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </main>
    </div>
  );
}
