'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Student {
  id: string;
  name: string;
  currentCourse: string;
  score: number;
  rank: number;
}

const AdminDashboard: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, you would fetch this data from your API
    const fetchStudents = async () => {
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const mockStudents: Student[] = [
        {
          id: '1',
          name: 'Alice Johnson',
          currentCourse: 'Mathematics 101',
          score: 85,
          rank: 3,
        },
        {
          id: '2',
          name: 'Bob Smith',
          currentCourse: 'Physics 202',
          score: 92,
          rank: 1,
        },
        {
          id: '3',
          name: 'Charlie Brown',
          currentCourse: 'Chemistry 301',
          score: 78,
          rank: 5,
        },
        {
          id: '4',
          name: 'Diana Ross',
          currentCourse: 'Biology 101',
          score: 88,
          rank: 2,
        },
        {
          id: '5',
          name: 'Ethan Hunt',
          currentCourse: 'Computer Science 201',
          score: 81,
          rank: 4,
        },
      ];

      setStudents(mockStudents);
      setLoading(false);
    };

    fetchStudents();
  }, []);

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto mt-8 p-4"
    >
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Current Course</th>
              <th className="py-3 px-4 text-left">Score</th>
              <th className="py-3 px-4 text-left">Rank</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <motion.tr
                key={student.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-4">{student.name}</td>
                <td className="py-3 px-4">{student.currentCourse}</td>
                <td className="py-3 px-4">{student.score}</td>
                <td className="py-3 px-4">{student.rank}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default AdminDashboard;
