// src/pages/StudentDashboard.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '@headlessui/react';
import {
  BookOpenIcon,
  ChartBarIcon,
  StarIcon,
  AcademicCapIcon,
  UserCircleIcon,
  BadgeCheckIcon,
} from '@heroicons/react/outline';
import QuizList from '../components/QuizList';
import CourseList from '../components/CourseList';
import LeaderBoard from '../components/Leaderboard';
import Badge from '../components/Badge';
import StudentAnalytics from '../components/StudentAnalytics';
import Achievements from '../components/Achievements';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function StudentDashboard() {
  const [selectedInstructor, setSelectedInstructor] = useState('all');

  const tabs = [
    { name: 'Quizzes', icon: BookOpenIcon },
    { name: 'Courses', icon: AcademicCapIcon },
    { name: 'Analytics', icon: ChartBarIcon },
    { name: 'Leaderboard', icon: StarIcon },
    { name: 'Achievements', icon: BadgeCheckIcon },
    { name: 'Badges', icon: StarIcon },
  ];

  const instructors = [
    { id: 'all', name: 'All Instructors' },
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
    { id: '3', name: 'Bob Johnson' },
  ];

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Student Dashboard
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
              <div className="mb-4">
                <label
                  htmlFor="instructor"
                  className="block text-sm font-medium text-gray-700"
                >
                  Filter by Instructor
                </label>
                <select
                  id="instructor"
                  name="instructor"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  value={selectedInstructor}
                  onChange={(e) => setSelectedInstructor(e.target.value)}
                >
                  {instructors.map((instructor) => (
                    <option key={instructor.id} value={instructor.id}>
                      {instructor.name}
                    </option>
                  ))}
                </select>
              </div>
              <QuizList instructorId={selectedInstructor} />
            </Tab.Panel>
            <Tab.Panel className="bg-white rounded-xl p-3">
              <div className="mb-4">
                <label
                  htmlFor="instructor"
                  className="block text-sm font-medium text-gray-700"
                >
                  Filter by Instructor
                </label>
                <select
                  id="instructor"
                  name="instructor"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  value={selectedInstructor}
                  onChange={(e) => setSelectedInstructor(e.target.value)}
                >
                  {instructors.map((instructor) => (
                    <option key={instructor.id} value={instructor.id}>
                      {instructor.name}
                    </option>
                  ))}
                </select>
              </div>
              <CourseList instructorId={selectedInstructor} />
            </Tab.Panel>
            <Tab.Panel className="bg-white rounded-xl p-3">
              <StudentAnalytics />
            </Tab.Panel>
            <Tab.Panel className="bg-white rounded-xl p-3">
              <LeaderBoard />
            </Tab.Panel>
            <Tab.Panel className="bg-white rounded-xl p-3">
              <Achievements />
            </Tab.Panel>
            <Tab.Panel className="bg-white rounded-xl p-3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {badges.map((badge, index) => (
                  <Badge key={index} {...badge} />
                ))}
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </main>
    </div>
  );
}
