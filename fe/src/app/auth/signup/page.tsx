// src/app/(auth)/signup/page.tsx
import { SignupForm } from '@/components/auth/SignupForm';

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>
        <SignupForm />
      </div>
    </div>
  );
}
