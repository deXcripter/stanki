'use client';

import React from 'react';
import { LeaderboardEntry } from '@/types';
import { motion } from 'framer-motion';

interface LeaderboardProps {
  entries: LeaderboardEntry[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ entries }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto mt-8"
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Leaderboard</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left">Rank</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Level</th>
              <th className="py-3 px-4 text-left">Score</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <motion.tr
                key={entry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
              >
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4 font-medium">{entry.name}</td>
                <td className="py-3 px-4">{entry.level}</td>
                <td className="py-3 px-4">{entry.score}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default Leaderboard;
