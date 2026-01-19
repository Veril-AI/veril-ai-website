import { useState, useEffect } from 'react';
import Navbar from './Navbar';

const BlogEditor = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: 'Personal',
    tags: '',
    image: '',
    date: new Date().toISOString().split('T')[0]
  });

  const [autoSlug, setAutoSlug] = useState(true);
  const [generatedCode, setGeneratedCode] = useState('');
  const [showOutput, setShowOutput] = useState(false);

  // Check if already authenticated in session
  useEffect(() => {
    const auth = sessionStorage.getItem('blogEditorAuth');
    if (auth === 'authenticated') {
      setIsAuthenticated(true);
    }
  }, []);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === 'Wildsnake2133!') {
      setIsAuthenticated(true);
      sessionStorage.setItem('blogEditorAuth', 'authenticated');
      setPasswordError('');
    } else {
      setPasswordError('Incorrect password. Please try again.');
      setPasswordInput('');
    }
  };

  const slugify = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const estimateReadTime = (content) => {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
    return `${minutes} min read`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => {
      const updated = { ...prev, [name]: value };

      // Auto-generate slug from title if enabled
      if (name === 'title' && autoSlug) {
        updated.slug = slugify(value);
      }

      return updated;
    });
  };

  const handleSlugToggle = (e) => {
    setAutoSlug(e.target.checked);
    if (e.target.checked && formData.title) {
      setFormData(prev => ({ ...prev, slug: slugify(prev.title) }));
    }
  };

  const generateBlogPost = (e) => {
    e.preventDefault();

    const readTime = estimateReadTime(formData.content);
    const tags = formData.tags
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);

    const blogPost = {
      id: 'NEXT_ID', // Placeholder
      slug: formData.slug || slugify(formData.title),
      title: formData.title,
      excerpt: formData.excerpt,
      content: formData.content,
      date: formData.date,
      readTime: readTime,
      category: formData.category,
      tags: tags,
      image: formData.image || null
    };

    const code = `{
  id: NEXT_ID,  // Replace with next available ID
  slug: '${blogPost.slug}',
  title: '${blogPost.title}',
  excerpt: '${blogPost.excerpt}',
  content: \`${blogPost.content}\`,
  date: '${blogPost.date}',
  readTime: '${blogPost.readTime}',
  category: '${blogPost.category}',
  tags: [${blogPost.tags.map(tag => `'${tag}'`).join(', ')}],
  image: ${blogPost.image ? `'${blogPost.image}'` : 'null'}
}`;

    setGeneratedCode(code);
    setShowOutput(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode);
    alert('Blog post code copied to clipboard!');
  };

  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      category: 'Personal',
      tags: '',
      image: '',
      date: new Date().toISOString().split('T')[0]
    });
    setAutoSlug(true);
    setShowOutput(false);
    setGeneratedCode('');
  };

  // Show password screen if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="bg-gradient-to-br from-gray-100 to-gray-50 min-h-screen py-16">
        <Navbar />
        <div className="container mx-auto py-12 px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
                Blog Editor Access
              </h1>
              <p className="text-center text-gray-600 mb-6">
                Please enter the password to access the blog editor
              </p>

              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <div>
                  <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Enter password"
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    autoFocus
                  />
                </div>

                {passwordError && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    {passwordError}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300"
                >
                  Access Editor
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-50 min-h-screen py-16">
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Blog Post Editor
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Create a new blog post and generate the code to add to your blog
          </p>

          {!showOutput ? (
            <div className="bg-white rounded-lg shadow-xl p-8">
              <form onSubmit={generateBlogPost} className="space-y-6">
                {/* Title */}
                <div>
                  <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    placeholder="Enter blog post title"
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                {/* Slug */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="slug" className="block text-gray-700 text-sm font-bold">
                      URL Slug <span className="text-red-500">*</span>
                    </label>
                    <label className="flex items-center text-sm text-gray-600">
                      <input
                        type="checkbox"
                        checked={autoSlug}
                        onChange={handleSlugToggle}
                        className="mr-2"
                      />
                      Auto-generate
                    </label>
                  </div>
                  <input
                    type="text"
                    id="slug"
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    disabled={autoSlug}
                    required
                    placeholder="url-friendly-slug"
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline disabled:bg-gray-100"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Preview: /blog/{formData.slug || 'your-slug-here'}
                  </p>
                </div>

                {/* Excerpt */}
                <div>
                  <label htmlFor="excerpt" className="block text-gray-700 text-sm font-bold mb-2">
                    Excerpt <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="excerpt"
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleChange}
                    required
                    rows={2}
                    placeholder="Brief summary (1-2 sentences)"
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                {/* Content */}
                <div>
                  <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
                    Content <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    required
                    rows={12}
                    placeholder="Write your blog post content here... Use double line breaks for new paragraphs."
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-mono text-sm"
                  />
                  {formData.content && (
                    <p className="text-xs text-gray-500 mt-1">
                      Estimated read time: {estimateReadTime(formData.content)}
                    </p>
                  )}
                </div>

                {/* Category and Date Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option value="Personal">Personal</option>
                      <option value="Tech">Tech</option>
                      <option value="Business">Business</option>
                      <option value="Learning">Learning</option>
                      <option value="Career">Career</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
                      Publication Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <label htmlFor="tags" className="block text-gray-700 text-sm font-bold mb-2">
                    Tags (comma-separated)
                  </label>
                  <input
                    type="text"
                    id="tags"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    placeholder="react, javascript, learning"
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                {/* Image */}
                <div>
                  <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
                    Featured Image Path (optional)
                  </label>
                  <input
                    type="text"
                    id="image"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="/assets/blog-image.jpg"
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Relative to public folder (e.g., /assets/image.jpg)
                  </p>
                </div>

                {/* Submit Button */}
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300"
                  >
                    Generate Blog Post Code
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                ✅ Blog Post Generated!
              </h2>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Next Steps:</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Copy the code below</li>
                  <li>Open <code className="bg-gray-100 px-2 py-1 rounded">src/data/blogPosts.js</code></li>
                  <li>Find the highest <code className="bg-gray-100 px-2 py-1 rounded">id</code> number and replace <code className="bg-gray-100 px-2 py-1 rounded">NEXT_ID</code> with the next number</li>
                  <li>Add this object to the <code className="bg-gray-100 px-2 py-1 rounded">blogPosts</code> array</li>
                  <li>Save the file and your blog post will be live!</li>
                </ol>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-bold text-gray-700">Generated Code:</label>
                  <button
                    onClick={copyToClipboard}
                    className="bg-gray-600 hover:bg-gray-700 text-white text-sm font-bold py-2 px-4 rounded transition duration-300"
                  >
                    📋 Copy to Clipboard
                  </button>
                </div>
                <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
                  <code>{generatedCode}</code>
                </pre>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <p className="text-sm text-blue-700">
                  <strong>💡 Tip:</strong> After adding this to blogPosts.js, run{' '}
                  <code className="bg-blue-100 px-2 py-1 rounded">npm start</code> to preview locally,
                  then <code className="bg-blue-100 px-2 py-1 rounded">npm run deploy</code> to publish!
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={resetForm}
                  className="flex-1 bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300"
                >
                  Create Another Post
                </button>
                <a
                  href="/#/blog"
                  className="flex-1 bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300 text-center"
                >
                  View Blog
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogEditor;
