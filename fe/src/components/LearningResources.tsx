'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'video' | 'quiz';
  link: string;
}

const mockResources: Resource[] = [
  {
    id: '1',
    title: 'Introduction to React Hooks',
    description:
      'Learn about the basics of React Hooks and how they can simplify your code.',
    type: 'article',
    link: '#',
  },
  {
    id: '2',
    title: 'Advanced CSS Techniques',
    description:
      'Discover advanced CSS techniques to create stunning layouts and animations.',
    type: 'video',
    link: '#',
  },
  {
    id: '3',
    title: 'JavaScript Fundamentals Quiz',
    description:
      'Test your knowledge of JavaScript fundamentals with this comprehensive quiz.',
    type: 'quiz',
    link: '#',
  },
  // Add more mock resources here
];

const LearningResources: React.FC = () => {
  const [resources] = useState<Resource[]>(mockResources);
  const [filter, setFilter] = useState<'all' | 'article' | 'video' | 'quiz'>(
    'all',
  );

  const filteredResources =
    filter === 'all' ? resources : resources.filter((r) => r.type === filter);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto mt-8"
    >
      <h1 className="text-3xl font-bold mb-6 text-center">
        Learning Resources
      </h1>
      <div className="mb-6 flex justify-center space-x-4">
        <FilterButton
          active={filter === 'all'}
          onClick={() => setFilter('all')}
        >
          All
        </FilterButton>
        <FilterButton
          active={filter === 'article'}
          onClick={() => setFilter('article')}
        >
          Articles
        </FilterButton>
        <FilterButton
          active={filter === 'video'}
          onClick={() => setFilter('video')}
        >
          Videos
        </FilterButton>
        <FilterButton
          active={filter === 'quiz'}
          onClick={() => setFilter('quiz')}
        >
          Quizzes
        </FilterButton>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredResources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </motion.div>
  );
};

const FilterButton: React.FC<{
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ active, onClick, children }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`px-4 py-2 rounded-full ${
      active ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
    }`}
  >
    {children}
  </motion.button>
);

const ResourceCard: React.FC<{ resource: Resource }> = ({ resource }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="bg-white p-6 rounded-lg shadow-md"
  >
    <h2 className="text-xl font-semibold mb-2">{resource.title}</h2>
    <p className="text-gray-600 mb-4">{resource.description}</p>
    <div className="flex justify-between items-center">
      <span
        className={`px-2 py-1 rounded-full text-sm ${getTypeColor(
          resource.type,
        )}`}
      >
        {resource.type}
      </span>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={resource.link}
        className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"
      >
        View Resource
      </motion.a>
    </div>
  </motion.div>
);

const getTypeColor = (type: Resource['type']) => {
  switch (type) {
    case 'article':
      return 'bg-green-100 text-green-800';
    case 'video':
      return 'bg-red-100 text-red-800';
    case 'quiz':
      return 'bg-yellow-100 text-yellow-800';
  }
};

export default LearningResources;
