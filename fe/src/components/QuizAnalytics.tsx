import { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface QuizPerformance {
  quizName: string;
  averageScore: number;
  participationRate: number;
}

export default function QuizAnalytics() {
  const [quizPerformance, setQuizPerformance] = useState<QuizPerformance[]>([]);

  useEffect(() => {
    // TODO: Replace with actual API call
    const mockData: QuizPerformance[] = [
      { quizName: 'CSC 401 Quiz 1', averageScore: 85, participationRate: 90 },
      { quizName: 'CSC 452', averageScore: 78, participationRate: 85 },
      { quizName: 'CSC 482', averageScore: 72, participationRate: 80 },
      { quizName: 'CSC 371', averageScore: 88, participationRate: 95 },
      { quizName: 'CSC 343', averageScore: 76, participationRate: 70 },
    ];
    setQuizPerformance(mockData);
  }, []);

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900">
        Quiz Performance Analytics
      </h2>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Average Scores and Participation Rates
        </h3>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={quizPerformance}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="quizName" />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip />
              <Legend />
              <Bar
                yAxisId="left"
                dataKey="averageScore"
                fill="#8884d8"
                name="Average Score"
              />
              <Bar
                yAxisId="right"
                dataKey="participationRate"
                fill="#82ca9d"
                name="Participation Rate (%)"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
