// src/pages/CourseMaterials.tsx
import { useState, useEffect } from 'react';
import CourseMaterial from '../components/CourseMaterial';

interface Material {
  id: number;
  title: string;
  type: 'file' | 'article' | 'video';
  url: string;
  description: string;
}

export default function CourseMaterials() {
  const [materials, setMaterials] = useState<Material[]>([]);

  useEffect(() => {
    // TODO: Fetch materials from API
    const mockMaterials: Material[] = [
      {
        id: 1,
        title: 'Introduction to React',
        type: 'article',
        url: 'https://example.com/intro-to-react',
        description: 'A comprehensive guide to getting started with React',
      },
      {
        id: 2,
        title: 'Advanced JavaScript Concepts',
        type: 'video',
        url: 'https://example.com/advanced-js-video',
        description: 'Deep dive into advanced JavaScript concepts',
      },
      {
        id: 3,
        title: 'CSS Flexbox Cheatsheet',
        type: 'file',
        url: 'https://example.com/flexbox-cheatsheet.pdf',
        description: 'Quick reference guide for CSS Flexbox',
      },
    ];
    setMaterials(mockMaterials);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Course Materials</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {materials.map((material) => (
                <CourseMaterial key={material.id} {...material} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}