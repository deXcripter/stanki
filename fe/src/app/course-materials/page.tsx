import CourseMaterialManager from '@/components/CourseMaterialManager';

export default function CourseMaterialsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Course Materials</h1>
      <CourseMaterialManager />
    </div>
  );
}
