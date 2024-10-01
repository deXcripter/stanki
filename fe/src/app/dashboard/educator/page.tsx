// src/app/dashboard/educator/page.tsx
'use client';

import { useState } from 'react';
import { AnimatedWrapper } from '@/components/ui/AnimatedWrapper';
import { CourseMaterialUpload } from '@/components/dashboard/educator/CourseMaterialUpload';
import { QuizCreator } from '@/components/dashboard/educator/QuizCreator';
import { StudentLeaderboard } from '@/components/dashboard/educator/StudentLeaderboard';
import { Button } from '@/components/ui/Button';

export default function EducatorDashboard() {
  const [activeTab, setActiveTab] = useState('materials');

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'materials':
        return <CourseMaterialUpload />;
      case 'quizzes':
        return <QuizCreator />;
      case 'leaderboard':
        return <StudentLeaderboard />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Educator Dashboard</h1>
      <div className="flex space-x-2 mb-4">
        <Button
          onClick={() => setActiveTab('materials')}
          variant={activeTab === 'materials' ? 'primary' : 'secondary'}
        >
          Course Materials
        </Button>
        <Button
          onClick={() => setActiveTab('quizzes')}
          variant={activeTab === 'quizzes' ? 'primary' : 'secondary'}
        >
          Quizzes
        </Button>
        <Button
          onClick={() => setActiveTab('leaderboard')}
          variant={activeTab === 'leaderboard' ? 'primary' : 'secondary'}
        >
          Leaderboard
        </Button>
      </div>
      <AnimatedWrapper>{renderActiveComponent()}</AnimatedWrapper>
    </div>
  );
}
