'use client';

import React from 'react';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  // Mock data for progress chart
  const progressData = [
    { day: 'Mon', score: 30 },
    { day: 'Tue', score: 45 },
    { day: 'Wed', score: 60 },
    { day: 'Thu', score: 40 },
    { day: 'Fri', score: 70 },
    { day: 'Sat', score: 80 },
    { day: 'Sun', score: 65 },
  ];

  if (!user) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg"
    >
      <h1 className="text-3xl font-bold mb-6">Welcome, {user.name}!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-lg shadow"
        >
          <h2 className="text-xl font-semibold mb-4">Your Stats</h2>
          <p className="text-lg mb-2">
            Level: <span className="font-bold text-blue-600">{user.level}</span>
          </p>
          <p className="text-lg mb-2">
            Total Points:{' '}
            <span className="font-bold text-purple-600">{user.points}</span>
          </p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Weekly Progress</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 gap-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-green-100 to-blue-100 p-6 rounded-lg shadow"
          >
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <Link
              href="/quiz"
              className="block mb-2 text-blue-600 hover:underline"
            >
              Start a New Quiz
            </Link>
            <Link
              href="/leaderboard"
              className="block mb-2 text-blue-600 hover:underline"
            >
              View Leaderboard
            </Link>
            <Link
              href="/resources"
              className="block text-blue-600 hover:underline"
            >
              Browse Learning Resources
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-yellow-100 to-red-100 p-6 rounded-lg shadow"
          >
            <h2 className="text-xl font-semibold mb-4">Recent Achievements</h2>
            <ul className="list-disc list-inside">
              <li>Completed 5 quizzes in a row</li>
              <li>Reached level 5</li>
              <li>Top 10 on the leaderboard</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
