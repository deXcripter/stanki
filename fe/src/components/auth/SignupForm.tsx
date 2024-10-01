// src/components/auth/SignupForm.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useAuth } from '@/contexts/AuthContext';

const schema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
  role: z.enum(['student', 'educator'], {
    required_error: 'Please select a role',
  }),
});

type FormData = z.infer<typeof schema>;

export const SignupForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { signup } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      await signup(data.name, data.email, data.password, data.role);
    } catch (error) {
      console.error('Signup failed:', error);
      // TODO: Show error message to user
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input label="Name" {...register('name')} error={errors.name?.message} />
      <Input
        label="Email"
        type="email"
        {...register('email')}
        error={errors.email?.message}
      />
      <Input
        label="Password"
        type="password"
        {...register('password')}
        error={errors.password?.message}
      />
      <div className="space-y-2">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Role
        </label>
        <div className="flex space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              {...register('role')}
              value="student"
              className="form-radio"
            />
            <span className="ml-2">Student</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              {...register('role')}
              value="educator"
              className="form-radio"
            />
            <span className="ml-2">Educator</span>
          </label>
        </div>
        {errors.role && (
          <p className="text-red-500 text-xs italic">{errors.role.message}</p>
        )}
      </div>
      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? 'Signing up...' : 'Sign Up'}
      </Button>
    </form>
  );
};
