// src/app/dashboard/student/page.tsx
'use client';

import { useState } from 'react';
import { AnimatedWrapper } from '@/components/ui/AnimatedWrapper';
import { QuizParticipation } from '@/components/dashboard/student/QuizParticipation';
import { CourseMaterials } from '@/components/dashboard/student/CourseMaterials';
import { Leaderboard } from '@/components/dashboard/student/Leaderboard';
import { Profile } from '@/components/dashboard/student/Profile';
import { Button } from '@/components/ui/Button';

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('quizzes');

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'quizzes':
        return <QuizParticipation />;
      case 'materials':
        return <CourseMaterials />;
      case 'leaderboard':
        return <Leaderboard />;
      case 'profile':
        return <Profile />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Student Dashboard</h1>
      <div className="flex space-x-2 mb-4">
        <Button
          onClick={() => setActiveTab('quizzes')}
          variant={activeTab === 'quizzes' ? 'primary' : 'secondary'}
        >
          Quizzes
        </Button>
        <Button
          onClick={() => setActiveTab('materials')}
          variant={activeTab === 'materials' ? 'primary' : 'secondary'}
        >
          Materials
        </Button>
        <Button
          onClick={() => setActiveTab('leaderboard')}
          variant={activeTab === 'leaderboard' ? 'primary' : 'secondary'}
        >
          Leaderboard
        </Button>
        <Button
          onClick={() => setActiveTab('profile')}
          variant={activeTab === 'profile' ? 'primary' : 'secondary'}
        >
          Profile
        </Button>
      </div>
      <AnimatedWrapper>{renderActiveComponent()}</AnimatedWrapper>
    </div>
  );
}
