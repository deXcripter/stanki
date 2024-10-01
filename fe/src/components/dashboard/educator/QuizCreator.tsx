// src/components/dashboard/educator/QuizCreator.tsx
'use client';

import { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

const questionSchema = z.object({
  question: z.string().min(1, 'Question is required'),
  options: z.array(z.string()).min(2, 'At least two options are required'),
  correctAnswer: z.number().min(0, 'Correct answer is required'),
});

const quizSchema = z.object({
  title: z.string().min(1, 'Quiz title is required'),
  questions: z
    .array(questionSchema)
    .min(1, 'At least one question is required'),
});

type QuizFormData = z.infer<typeof quizSchema>;

export const QuizCreator = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<QuizFormData>({
    resolver: zodResolver(quizSchema),
    defaultValues: {
      title: '',
      questions: [{ question: '', options: ['', ''], correctAnswer: 0 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'questions',
  });

  const onSubmit = async (data: QuizFormData) => {
    setIsLoading(true);
    // TODO: Implement quiz creation logic
    console.log('Creating quiz:', data);
    setIsLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Create Quiz</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="Quiz Title"
          {...register('title')}
          error={errors.title?.message}
        />
        {fields.map((field, index) => (
          <div key={field.id} className="space-y-2 p-4 border rounded">
            <Input
              label={`Question ${index + 1}`}
              {...register(`questions.${index}.question`)}
              error={errors.questions?.[index]?.question?.message}
            />
            {field.options.map((_, optionIndex) => (
              <Input
                key={optionIndex}
                label={`Option ${optionIndex + 1}`}
                {...register(`questions.${index}.options.${optionIndex}`)}
                error={
                  errors.questions?.[index]?.options?.[optionIndex]?.message
                }
              />
            ))}
            <Input
              label="Correct Answer (0-based index)"
              type="number"
              {...register(`questions.${index}.correctAnswer`, {
                valueAsNumber: true,
              })}
              error={errors.questions?.[index]?.correctAnswer?.message}
            />
            <Button
              type="button"
              onClick={() => remove(index)}
              variant="secondary"
            >
              Remove Question
            </Button>
          </div>
        ))}
        <Button
          type="button"
          onClick={() =>
            append({ question: '', options: ['', ''], correctAnswer: 0 })
          }
          variant="secondary"
        >
          Add Question
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Creating Quiz...' : 'Create Quiz'}
        </Button>
      </form>
    </div>
  );
};
