'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CourseMaterial } from '@/types';

const CourseMaterialManager: React.FC = () => {
  const [materials, setMaterials] = useState<CourseMaterial[]>([]);
  const [newMaterial, setNewMaterial] = useState({
    title: '',
    description: '',
    file: null as File | null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setNewMaterial((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewMaterial((prev) => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMaterial.title && newMaterial.description && newMaterial.file) {
      const newCourseMaterial: CourseMaterial = {
        id: Date.now().toString(),
        title: newMaterial.title,
        description: newMaterial.description,
        fileUrl: URL.createObjectURL(newMaterial.file), // In a real app, you'd upload to a server
        uploadedBy: 'Current User', // Replace with actual user name
        uploadDate: new Date().toISOString(),
        activeStudents: 0,
      };
      setMaterials((prev) => [...prev, newCourseMaterial]);
      setNewMaterial({ title: '', description: '', file: null });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-6">Course Material Manager</h2>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={newMaterial.title}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={newMaterial.description}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            rows={3}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="file"
            className="block text-sm font-medium text-gray-700"
          >
            File
          </label>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            className="mt-1 block w-full"
            required
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Upload Material
        </motion.button>
      </form>
      <div>
        <h3 className="text-xl font-semibold mb-4">Uploaded Materials</h3>
        {materials.map((material) => (
          <motion.div
            key={material.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-100 p-4 rounded-md mb-4"
          >
            <h4 className="text-lg font-medium">{material.title}</h4>
            <p className="text-sm text-gray-600 mb-2">{material.description}</p>
            <p className="text-sm text-gray-500">
              Uploaded by: {material.uploadedBy} on{' '}
              {new Date(material.uploadDate).toLocaleDateString()}
            </p>
            <p className="text-sm text-blue-600">
              Active Students: {material.activeStudents}
            </p>
            <a
              href={material.fileUrl}
              download
              className="text-blue-500 hover:underline"
            >
              Download
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CourseMaterialManager;
