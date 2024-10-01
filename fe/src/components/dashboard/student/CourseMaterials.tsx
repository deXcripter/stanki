// src/components/dashboard/student/CourseMaterials.tsx
export const CourseMaterials = () => {
  // TODO: Fetch course materials from API
  const materials = [
    { id: 1, title: 'Introduction to Algebra', type: 'PDF' },
    { id: 2, title: 'Chemistry Basics', type: 'Video' },
    { id: 3, title: 'World War II Overview', type: 'Document' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Course Materials</h2>
      <ul className="space-y-2">
        {materials.map((material) => (
          <li key={material.id} className="flex justify-between items-center">
            <span>{material.title}</span>
            <span className="text-sm text-gray-500">{material.type}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
