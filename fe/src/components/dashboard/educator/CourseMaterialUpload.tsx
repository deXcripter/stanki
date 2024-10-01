// src/components/dashboard/educator/CourseMaterialUpload.tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export const CourseMaterialUpload = () => {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = async () => {
    if (!title || !file) return;

    // TODO: Implement file upload logic
    console.log('Uploading:', { title, file });

    // Reset form
    setTitle('');
    setFile(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Upload Course Material</h2>
      <Input
        label="Material Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        label="File"
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <Button onClick={handleUpload} className="mt-4">
        Upload
      </Button>
    </div>
  );
};
