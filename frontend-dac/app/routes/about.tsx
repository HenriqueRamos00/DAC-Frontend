import { useNavigate } from "react-router";
import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - React Router v7 DAC Demo" },
    { name: "description", content: "Learn more about us" },
  ];
}

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12 text-white">
          <h1 className="text-4xl font-bold mb-4">About This Demo</h1>
          <p className="text-blue-100 text-lg">
            Exploring the power of React Router v7 with Tailwind CSS
          </p>
        </div>

        {/* Content */}
        <div className="px-8 py-10">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What is React Router v7?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              React Router v7 is the latest version of the most popular routing
              library for React applications. It brings improved performance,
              better developer experience, and enhanced type safety.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">
                  File-based routing with automatic code splitting
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">
                  Built-in data loading with loaders and actions
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">
                  Enhanced TypeScript support with type inference
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">
                  Optimistic UI and progressive enhancement
                </span>
              </li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
              <p className="text-blue-900 font-medium mb-2">💡 Pro Tip</p>
              <p className="text-blue-800">
                React Router v7 seamlessly integrates with frameworks like Remix
                and provides excellent performance out of the box.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors font-medium"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Go Back
            </button>
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}