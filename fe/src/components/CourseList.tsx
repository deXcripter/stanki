import { useState, useEffect } from 'react';
import {
  DocumentTextIcon,
  VideoCameraIcon,
  NewspaperIcon,
  UserGroupIcon,
} from '@heroicons/react/solid';

interface CourseMaterial {
  id: string;
  title: string;
  type: 'coursework' | 'video' | 'article';
  url: string;
  enrolledStudents: number;
  instructorId: string;
  instructorName: string;
}

interface CourseListProps {
  instructorId: string;
}

export default function CourseList({ instructorId }: CourseListProps) {
  const [materials, setMaterials] = useState<CourseMaterial[]>([]);

  useEffect(() => {
    // TODO: Replace with actual API call
    const mockMaterials: CourseMaterial[] = [
      {
        id: '1',
        title: 'Introduction to React',
        type: 'coursework',
        url: '/materials/intro-react.pdf',
        enrolledStudents: 150,
        instructorId: '1',
        instructorName: 'John Doe',
      },
      {
        id: '2',
        title: 'JavaScript Basics',
        type: 'video',
        url: 'https://example.com/js-basics',
        enrolledStudents: 200,
        instructorId: '2',
        instructorName: 'Jane Smith',
      },
      {
        id: '3',
        title: 'CSS Grid Layout',
        type: 'article',
        url: 'https://example.com/css-grid',
        enrolledStudents: 100,
        instructorId: '3',
        instructorName: 'Bob Johnson',
      },
    ];
    setMaterials(mockMaterials);
  }, []);

  const getIcon = (type: string) => {
    switch (type) {
      case 'coursework':
        return <DocumentTextIcon className="h-6 w-6 text-blue-500" />;
      case 'video':
        return <VideoCameraIcon className="h-6 w-6 text-red-500" />;
      case 'article':
        return <NewspaperIcon className="h-6 w-6 text-green-500" />;
      default:
        return null;
    }
  };

  const filteredMaterials =
    instructorId === 'all'
      ? materials
      : materials.filter((material) => material.instructorId === instructorId);

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {filteredMaterials.map((material) => (
          <li key={material.id}>
            <a href={material.url} className="block hover:bg-gray-50">
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {getIcon(material.type)}
                    <p className="ml-3 text-sm font-medium text-gray-900">
                      {material.title}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <UserGroupIcon className="h-5 w-5 text-gray-400" />
                    <p className="ml-1 text-sm text-gray-500">
                      {material.enrolledStudents}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      {material.type.charAt(0).toUpperCase() +
                        material.type.slice(1)}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <p>Instructor: {material.instructorName}</p>
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
