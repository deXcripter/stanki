import { useState, useEffect } from 'react';

interface LeaderboardEntry {
  id: number;
  name: string;
  score: number;
}

export default function LeaderBoard() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    // TODO: Fetch leaderboard from API
    const mockLeaderboard: LeaderboardEntry[] = [
      { id: 1, name: 'Johnpaul', score: 95 },
      { id: 2, name: 'Chinaza', score: 88 },
      { id: 3, name: 'Silver', score: 82 },
      { id: 4, name: 'Emma', score: 79 },
      { id: 5, name: 'Ebube', score: 75 },
    ];
    setLeaderboard(mockLeaderboard);
  }, []);

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Rank
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Score
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {leaderboard.map((entry, index) => (
            <tr key={entry.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {index + 1}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {entry.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {entry.score}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
