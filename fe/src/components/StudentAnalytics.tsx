import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface AnalyticsData {
  quizzes: {
    labels: string[];
    scores: number[];
  };
  courses: {
    labels: string[];
    progress: number[];
  };
}

export default function StudentAnalytics() {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(
    null,
  );

  useEffect(() => {
    // TODO: Replace with actual API call
    const mockData: AnalyticsData = {
      quizzes: {
        labels: [
          'Math Quiz',
          'Science Quiz',
          'History Quiz',
          'Literature Quiz',
        ],
        scores: [85, 92, 78, 88],
      },
      courses: {
        labels: [
          'Introduction to React',
          'JavaScript Basics',
          'CSS Grid Layout',
          'Python for Beginners',
        ],
        progress: [100, 75, 50, 25],
      },
    };
    setAnalyticsData(mockData);
  }, []);

  if (!analyticsData) {
    return <div>Loading analytics...</div>;
  }

  const quizOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Quiz Scores',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  const quizData = {
    labels: analyticsData.quizzes.labels,
    datasets: [
      {
        label: 'Score',
        data: analyticsData.quizzes.scores,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  const courseOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Course Progress',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  const courseData = {
    labels: analyticsData.courses.labels,
    datasets: [
      {
        label: 'Progress (%)',
        data: analyticsData.courses.progress,
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Quiz Performance</h2>
        <Bar options={quizOptions} data={quizData} />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Course Progress</h2>
        <Bar options={courseOptions} data={courseData} />
      </div>
    </div>
  );
}
