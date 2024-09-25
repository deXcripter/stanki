'use client';

import React from 'react';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Welcome, {user.name}!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Your Stats</h2>
          <p>Level: {user.level}</p>
          <p>Total Points: {user.points}</p>
        </div>
        <div className="bg-green-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Quick Actions</h2>
          <Link
            href="/quiz"
            className="block mb-2 text-blue-600 hover:underline"
          >
            Start a New Quiz
          </Link>
          <Link
            href="/leaderboard"
            className="block text-blue-600 hover:underline"
          >
            View Leaderboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
