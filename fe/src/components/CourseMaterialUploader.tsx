// src/components/CourseMaterialUploader.tsx
import { useState } from 'react';
import axiosInstance from '../services/axios';
import { toast } from 'react-toastify';

export default function CourseMaterialUploader() {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('file');
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    if (type === 'file' && file) {
      formData.append('file', file);
    } else {
      formData.append('url', url);
    }
    formData.append('title', title);
    formData.append('type', type);
    formData.append('description', description);

    axiosInstance
      .post('/resource', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        timeout: 15000,
        timeoutErrorMessage: 'Request timed out',
      })
      .then((val) => {
        console.log(val);
        toast.success('Material uploaded successfully');
      })
      .catch((err) => {
        toast.error('Failed to upload material');
        console.error(err);
      });
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
              Upload Course Material
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Provide details about the course material you want to upload.
            </p>
          </div>

          <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
            <div className="sm: grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Title
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md h-12 text-lg"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Type
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <select
                  id="type"
                  name="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md h-12 text-lg"
                >
                  <option value="file">file (PDF)</option>
                  <option value="video">Video</option>
                  <option value="article">Article</option>
                </select>
              </div>
            </div>

            {type === 'file' ? (
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="file"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  File (PDF)
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="file"
                    name="file"
                    id="file"
                    accept=".pdf"
                    onChange={(e) =>
                      setFile(e.target.files ? e.target.files[0] : null)
                    }
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            ) : (
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="url"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  URL
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="url"
                    name="url"
                    id="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md h-12 text-lg"
                  />
                </div>
              </div>
            )}

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Description
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Upload Material
          </button>
        </div>
      </div>
    </form>
  );
}
