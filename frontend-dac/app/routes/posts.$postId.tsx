import { useParams, useNavigate } from "react-router";
import type { Route } from "./+types/posts.$postId";

export async function loader({ params }: Route.LoaderArgs) {
  // Simulate API call
  const post = {
    id: params.postId,
    title: `Understanding React Router v7`,
    content: `React Router v7 represents a significant evolution in client-side routing for React applications. It brings together the best practices learned from years of development and community feedback.

This version introduces powerful new features like improved data loading patterns, better error handling, and enhanced type safety. The developer experience has been refined to make building complex applications more intuitive and maintainable.

With built-in support for modern web standards and seamless integration with React's latest features, React Router v7 is the foundation for building robust, scalable web applications.`,
    author: "John Doe",
    date: "December 15, 2024",
    readTime: "5 min read",
    tags: ["React", "Routing", "Web Development"],
  };

  return { post };
}

export default function Post({ loaderData }: Route.ComponentProps) {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Article Header */}
        <div className="px-8 py-10 border-b border-gray-200">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span>{loaderData.post.date}</span>
            <span className="mx-2">•</span>
            <span>{loaderData.post.readTime}</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {loaderData.post.title}
          </h1>
          
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
              {loaderData.post.author.charAt(0)}
            </div>
            <div>
              <p className="text-gray-900 font-medium">
                {loaderData.post.author}
              </p>
              <p className="text-gray-500 text-sm">Technical Writer</p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {loaderData.post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Article Content */}
        <div className="px-8 py-10">
          <div className="prose max-w-none">
            {loaderData.post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Metadata */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Post ID:</span> {params.postId}
            </p>
          </div>
        </div>

        {/* Article Footer */}
        <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors"
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
              Back
            </button>
            
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-gray-700 font-medium">
                Share
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Related Posts
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[2, 3].map((id) => (
            <button
              key={id}
              onClick={() => navigate(`/posts/${id}`)}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-left"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Related Post {id}
              </h3>
              <p className="text-gray-600 mb-4">
                Explore more about React Router and modern web development.
              </p>
              <span className="text-blue-600 font-medium hover:text-blue-700">
                Read more →
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}