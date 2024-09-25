import QuizCreator from '@/components/QuizCreator';

export default function CreateQuizPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Create a New Quiz</h1>
      <QuizCreator />
    </div>
  );
}
