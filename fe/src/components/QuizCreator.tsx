// src/components/QuizCreator.tsx
import { useState } from 'react';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

export default function QuizCreator() {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState<Question[]>([
    { question: '', options: ['', ''], correctAnswer: 0 },
  ]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { question: '', options: ['', ''], correctAnswer: 0 },
    ]);
  };

  const updateQuestion = (
    index: number,
    field: keyof Question,
    value: string | number,
  ) => {
    const updatedQuestions = [...questions];
    if (field === 'options') {
      updatedQuestions[index].options = value as string[];
    } else {
      updatedQuestions[index][field] = value as string & number;
    }
    setQuestions(updatedQuestions);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Submit quiz to API
    console.log('Quiz submitted:', { title, questions });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 divide-y divide-gray-200"
    >
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div>
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Create a New Quiz
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Fill in the details for your new quiz.
            </p>
          </div>

          <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Quiz Title
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="max-w-lg block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>

        {questions.map((question, index) => (
          <div key={index} className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Question {index + 1}
              </h3>
            </div>

            <div className="space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor={`question-${index}`}
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Question
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name={`question-${index}`}
                    id={`question-${index}`}
                    value={question.question}
                    onChange={(e) =>
                      updateQuestion(index, 'question', e.target.value)
                    }
                    className="max-w-lg block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              {question.options.map((option, optionIndex) => (
                <div
                  key={optionIndex}
                  className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                >
                  <label
                    htmlFor={`question-${index}-option-${optionIndex}`}
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Option {optionIndex + 1}
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      type="text"
                      name={`question-${index}-option-${optionIndex}`}
                      id={`question-${index}-option-${optionIndex}`}
                      value={option}
                      onChange={(e) => {
                        const newOptions = [...question.options];
                        newOptions[optionIndex] = e.target.value;
                        updateQuestion(index, 'options', newOptions);
                      }}
                      className="max-w-lg block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              ))}

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor={`question-${index}-correct-answer`}
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Correct Answer
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <select
                    id={`question-${index}-correct-answer`}
                    name={`question-${index}-correct-answer`}
                    value={question.correctAnswer}
                    onChange={(e) =>
                      updateQuestion(
                        index,
                        'correctAnswer',
                        parseInt(e.target.value),
                      )
                    }
                    className="max-w-lg block focus:ring-blue-500 focus:border-blue-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  >
                    {question.options.map((_, optionIndex) => (
                      <option key={optionIndex} value={optionIndex}>
                        Option {optionIndex + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={addQuestion}
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add Question
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Create Quiz
          </button>
        </div>
      </div>
    </form>
  );
}
