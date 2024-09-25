import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Welcome to the Competitive Learning Platform
      </h1>
      <p className="mb-8 text-xl text-center max-w-2xl">
        Engage in quizzes, compete with peers, and enhance your learning
        experience!
      </p>
      <Link
        href="/quiz"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
      >
        Start a Quiz
      </Link>
    </div>
  );
}
