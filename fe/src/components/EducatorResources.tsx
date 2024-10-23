// src/components/EducatorResources.tsx
import { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import { PencilIcon, TrashIcon } from '@heroicons/react/solid';
import axiosInstance from '../services/axios';

interface Resource {
  id: string;
  title: string;
  type: 'quiz' | 'course';
  createdAt: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function EducatorResources() {
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    // TODO: Replace with actual API call
    async function fetchResources() {
      const response = await axiosInstance.get('/quiz/quiz-educator');
      console.log(response);
      setResources(response.data);
    }
    fetchResources();
    const mockResources: Resource[] = [
      { id: '1', title: 'CSC 452', type: 'quiz', createdAt: '2023-05-01' },
      {
        id: '2',
        title: 'Introduction to computer systems',
        type: 'course',
        createdAt: '2023-05-02',
      },
      {
        id: '3',
        title: 'Computer Architecture',
        type: 'quiz',
        createdAt: '2023-05-03',
      },
      {
        id: '4',
        title: 'Software Engineering',
        type: 'course',
        createdAt: '2023-05-04',
      },
    ];
    setResources(mockResources);
  }, []);

  const handleEdit = (id: string) => {
    // TODO: Implement edit functionality
    console.log('Editing resource:', id);
  };

  const handleDelete = (id: string) => {
    // TODO: Implement delete functionality
    console.log('Deleting resource:', id);
  };

  return (
    <div className="w-full px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
              )
            }
          >
            All Resources
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
              )
            }
          >
            Quizzes
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
              )
            }
          >
            Courses
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel className="rounded-xl bg-white p-3">
            <ul className="divide-y divide-gray-200">
              {resources.map((resource) => (
                <li
                  key={resource.id}
                  className="py-4 flex justify-between items-center"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {resource.title}
                    </p>
                    <p className="text-sm text-gray-500">{resource.type}</p>
                    <p className="text-sm text-gray-500">
                      Created: {resource.createdAt}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(resource.id)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      <PencilIcon className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(resource.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </Tab.Panel>
          <Tab.Panel className="rounded-xl bg-white p-3">
            <ul className="divide-y divide-gray-200">
              {resources
                .filter((r) => r.type === 'quiz')
                .map((resource) => (
                  <li
                    key={resource.id}
                    className="py-4 flex justify-between items-center"
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {resource.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        Created: {resource.createdAt}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(resource.id)}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        <PencilIcon className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(resource.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </li>
                ))}
            </ul>
          </Tab.Panel>
          <Tab.Panel className="rounded-xl bg-white p-3">
            <ul className="divide-y divide-gray-200">
              {resources
                .filter((r) => r.type === 'course')
                .map((resource) => (
                  <li
                    key={resource.id}
                    className="py-4 flex justify-between items-center"
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {resource.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        Created: {resource.createdAt}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(resource.id)}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        <PencilIcon className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(resource.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </li>
                ))}
            </ul>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
