// src/components/quizResource.tsx
import { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import { PencilIcon, TrashIcon } from '@heroicons/react/solid';
import axiosInstance from '../services/axios';
import { toast } from 'react-toastify';

interface Question {
  id: string;
  quizId: string;
  text: string;
  options: string[];
  correctAnswer: number; // Index of the correct answer in the options array
}
interface QuizResource {
  _id: string;
  title: string;
  questions?: Question[];
  type: 'quiz' | 'course';
  createdAt: string;
  updatedAt?: string;
  registeredStudents?: string[];
}

interface CourseResource {
  _id: string;
  title: string;
  type: 'video' | 'file' | 'link';
  url: string;
  description: string;
  educator: string;
  createdAt: string;
  updatedAt: string;
  registeredStudents: string[];
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function EducatorResource() {
  const [quizResource, setQuizResource] = useState<QuizResource[]>([]);
  const [courseResource, setCouresResource] = useState<CourseResource[]>([]);

  useEffect(() => {
    async function setResource() {
      const quizResponse = await axiosInstance.get('/quiz');
      const courseResponse = await axiosInstance.get('/course');

      const quizData = quizResponse.data.data;
      const resourceData = courseResponse.data.data;

      setCouresResource(resourceData.resources);
      setQuizResource(quizData.quizzes);
    }
    setResource();
  }, []);

  console.log(courseResource);

  const handleEdit = (id: string) => {
    // TODO: Implement edit functionality
    console.log('Editing resource:', id);
  };

  const handleDeleteForQuiz = async (id: string) => {
    const success = await axiosInstance.delete(`/quiz/${id}`);
    if (success) toast.success('Quiz deleted successfully');
    else toast.error('Failed to delete quiz');
    setQuizResource(quizResource.filter((r) => r._id !== id));
  };

  const handleDeleteForCourse = async (id: string) => {
    const success = await axiosInstance.delete(`/course/${id}`);
    if (success) toast.success('Quiz deleted successfully');
    else toast.error('Failed to delete quiz');
    setCouresResource(courseResource.filter((r) => r._id !== id));
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

        {/*-------------------------------------------------------------- */}
        {/*-------------------------------------------------------------- */}

        <Tab.Panels className="mt-2">
          <Tab.Panel className="rounded-xl bg-white p-3">
            <ul className="divide-y divide-gray-200">
              {quizResource.map((resource) => (
                <li
                  key={resource._id}
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
                      onClick={() => handleEdit(resource._id)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      <PencilIcon className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDeleteForQuiz(resource._id)}
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
              {courseResource.map((resource) => (
                <li
                  key={resource._id}
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
                      onClick={() => handleEdit(resource._id)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      <PencilIcon className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDeleteForCourse(resource._id)}
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
