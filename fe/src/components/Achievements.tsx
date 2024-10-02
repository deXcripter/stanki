import { useState, useEffect } from 'react';
import {
  StarIcon,
  LightningBoltIcon,
  AcademicCapIcon,
} from '@heroicons/react/solid';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: 'star' | 'lightning' | 'academic';
  unlockedAt: string | null;
}

export default function Achievements() {
  const [achievements, setAchievements] = useState<Achievement[]>([]);

  useEffect(() => {
    // TODO: Replace with actual API call
    const mockAchievements: Achievement[] = [
      {
        id: '1',
        title: 'Quiz Master',
        description: 'Complete 10 quizzes with a score of 90% or higher',
        icon: 'star',
        unlockedAt: '2023-05-15T10:30:00Z',
      },
      {
        id: '2',
        title: 'Speed Demon',
        description: 'Complete a quiz in under 5 minutes with a perfect score',
        icon: 'lightning',
        unlockedAt: null,
      },
      {
        id: '3',
        title: 'Course Conqueror',
        description: 'Complete all lessons in a course',
        icon: 'academic',
        unlockedAt: '2023-05-10T14:45:00Z',
      },
    ];
    setAchievements(mockAchievements);
  }, []);

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'star':
        return <StarIcon className="h-8 w-8 text-yellow-400" />;
      case 'lightning':
        return <LightningBoltIcon className="h-8 w-8 text-blue-500" />;
      case 'academic':
        return <AcademicCapIcon className="h-8 w-8 text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Achievements</h2>
      <ul className="space-y-4">
        {achievements.map((achievement) => (
          <li
            key={achievement.id}
            className={`flex items-center p-4 rounded-lg ${
              achievement.unlockedAt ? 'bg-green-100' : 'bg-gray-100'
            }`}
          >
            <div className="flex-shrink-0 mr-4">
              {getIcon(achievement.icon)}
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-semibold">{achievement.title}</h3>
              <p className="text-sm text-gray-600">{achievement.description}</p>
              {achievement.unlockedAt && (
                <p className="text-xs text-gray-500 mt-1">
                  Unlocked on:{' '}
                  {new Date(achievement.unlockedAt).toLocaleDateString()}
                </p>
              )}
            </div>
            {!achievement.unlockedAt && (
              <div className="flex-shrink-0 ml-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-800">
                  Locked
                </span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
