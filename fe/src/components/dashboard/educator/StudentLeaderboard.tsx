// src/components/dashboard/educator/StudentLeaderboard.tsx
export const StudentLeaderboard = () => {
  // TODO: Fetch leaderboard data from API
  const leaderboardData = [
    { id: 1, name: 'John Doe', score: 95 },
    { id: 2, name: 'Jane Smith', score: 92 },
    { id: 3, name: 'Bob Johnson', score: 88 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Student Leaderboard</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Rank</th>
            <th className="text-left">Name</th>
            <th className="text-left">Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
