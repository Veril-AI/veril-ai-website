import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-50 min-h-screen py-16">
      <Navbar />
      <article className="container mx-auto py-12 px-4 max-w-4xl">
        <Link
          to="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-6 transition-colors"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </Link>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover"
            />
          )}

          <div className="p-8">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span>•</span>
              <span>{post.readTime}</span>
              {post.category && (
                <>
                  <span>•</span>
                  <span className="text-blue-600 font-medium">{post.category}</span>
                </>
              )}
            </div>

            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              {post.title}
            </h1>

            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/blog"
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300"
          >
            View All Posts
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
