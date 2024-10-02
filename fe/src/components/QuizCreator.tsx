import { useState } from 'react';
import { PlusIcon, TrashIcon } from '@heroicons/react/solid';
import axiosInstance from '../services/axios';
import { showErrorToast } from '../utils/toasts';

export default function QuizCreator() {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([
    { question: '', options: ['', '', '', ''], correctAnswer: 0 },
  ]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { question: '', options: ['', '', '', ''], correctAnswer: 0 },
    ]);
  };

  const removeQuestion = (index: number) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const updateQuestion = (
    index: number,
    field: string,
    value: string | number,
  ) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = { ...updatedQuestions[index], [field]: value };
    setQuestions(updatedQuestions);
  };

  const updateOption = (
    questionIndex: number,
    optionIndex: number,
    value: string,
  ) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(updatedQuestions);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axiosInstance
      .post('/quiz', { title, questions })
      .then(() => {})
      .catch((err) => showErrorToast(err.message));
    // TODO: Implement quiz submission logic
    console.log('Quiz submitted:', { title, questions });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 divide-y divide-gray-200"
    >
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Create a New Quiz
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Provide a title for your quiz and add questions with multiple-choice
            answers.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Quiz Title
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md h-12 text-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Questions
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Add questions for your quiz.
          </p>
        </div>
        <div className="mt-6 space-y-6">
          {questions.map((question, questionIndex) => (
            <div
              key={questionIndex}
              className="border border-gray-200 rounded-md p-4"
            >
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-medium">
                  Question {questionIndex + 1}
                </h4>
                <button
                  type="button"
                  onClick={() => removeQuestion(questionIndex)}
                  className="text-red-600 hover:text-red-800"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor={`question-${questionIndex}`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Question Text
                  </label>
                  <input
                    type="text"
                    id={`question-${questionIndex}`}
                    value={question.question}
                    onChange={(e) =>
                      updateQuestion(questionIndex, 'question', e.target.value)
                    }
                    className="mt-1 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md h-12 text-lg"
                  />
                </div>
                {question.options.map((option, optionIndex) => (
                  <div key={optionIndex}>
                    <label
                      htmlFor={`question-${questionIndex}-option-${optionIndex}`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      Option {optionIndex + 1}
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        id={`question-${questionIndex}-option-${optionIndex}`}
                        value={option}
                        onChange={(e) =>
                          updateOption(
                            questionIndex,
                            optionIndex,
                            e.target.value,
                          )
                        }
                        className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-l-md sm:text-sm border-gray-300 h-12 text-lg"
                      />
                      <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                        <input
                          type="radio"
                          name={`correct-answer-${questionIndex}`}
                          checked={question.correctAnswer === optionIndex}
                          onChange={() =>
                            updateQuestion(
                              questionIndex,
                              'correctAnswer',
                              optionIndex,
                            )
                          }
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={addQuestion}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Add Question
            </button>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Quiz
          </button>
        </div>
      </div>
    </form>
  );
}
