'use client';

import React, { useState, useEffect } from 'react';
import Leaderboard from '@/components/Leaderboard';
import { LeaderboardEntry } from '@/types';

const mockLeaderboardEntries: LeaderboardEntry[] = [
  { id: '1', name: 'John Doe', score: 1000, level: 5 },
  { id: '2', name: 'Jane Smith', score: 950, level: 4 },
  { id: '3', name: 'Bob Johnson', score: 900, level: 4 },
  { id: '4', name: 'Alice Brown', score: 850, level: 3 },
  { id: '5', name: 'Charlie Davis', score: 800, level: 3 },
];

export default function LeaderboardPage() {
  const [leaderboardEntries, setLeaderboardEntries] = useState<
    LeaderboardEntry[]
  >([]);

  useEffect(() => {
    // In a real application, you would fetch leaderboard data from an API
    setLeaderboardEntries(mockLeaderboardEntries);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Leaderboard</h1>
      <Leaderboard entries={leaderboardEntries} />
    </div>
  );
}
