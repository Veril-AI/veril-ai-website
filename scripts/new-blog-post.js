#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function estimateReadTime(content) {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

async function main() {
  console.log('\n🚀 Blog Post Generator\n');
  console.log('Create a new blog post by answering the following questions:\n');

  // Get blog post details
  const title = await question('📝 Blog post title: ');
  if (!title.trim()) {
    console.log('❌ Title is required!');
    rl.close();
    return;
  }

  const slug = await question(`🔗 URL slug (press Enter for auto-generated): `) || slugify(title);

  const excerpt = await question('📄 Short excerpt (1-2 sentences): ');
  if (!excerpt.trim()) {
    console.log('❌ Excerpt is required!');
    rl.close();
    return;
  }

  console.log('\n📖 Blog content (type your content, then press Enter and type "END" on a new line to finish):');

  let content = '';
  let line;
  while ((line = await question('')) !== 'END') {
    content += line + '\n';
  }

  if (!content.trim()) {
    console.log('❌ Content is required!');
    rl.close();
    return;
  }

  const category = await question('🏷️  Category (e.g., Tech, Personal, Business) [optional]: ') || 'Personal';

  const tagsInput = await question('🔖 Tags (comma-separated) [optional]: ');
  const tags = tagsInput ? tagsInput.split(',').map(tag => tag.trim()) : [];

  const imagePath = await question('🖼️  Featured image path (relative to public folder) [optional]: ') || null;

  const date = await question(`📅 Publication date (YYYY-MM-DD) [press Enter for today: ${getTodayDate()}]: `) || getTodayDate();

  const readTime = estimateReadTime(content);

  // Read existing blog posts
  const blogPostsPath = path.join(__dirname, '../src/data/blogPosts.js');
  let blogPostsContent = fs.readFileSync(blogPostsPath, 'utf8');

  // Extract existing posts to get the next ID
  const existingPosts = blogPostsContent.match(/id:\s*(\d+)/g) || [];
  const nextId = existingPosts.length > 0
    ? Math.max(...existingPosts.map(match => parseInt(match.match(/\d+/)[0]))) + 1
    : 1;

  // Create new blog post object
  const newPost = {
    id: nextId,
    slug: slug,
    title: title,
    excerpt: excerpt,
    content: content.trim(),
    date: date,
    readTime: readTime,
    category: category,
    tags: tags,
    image: imagePath
  };

  // Format the new post as a string
  const newPostString = `  {
    id: ${newPost.id},
    slug: '${newPost.slug}',
    title: '${newPost.title}',
    excerpt: '${newPost.excerpt}',
    content: \`${newPost.content}\`,
    date: '${newPost.date}',
    readTime: '${newPost.readTime}',
    category: '${newPost.category}',
    tags: [${newPost.tags.map(tag => `'${tag}'`).join(', ')}],
    image: ${newPost.image ? `'${newPost.image}'` : 'null'}
  }`;

  // Add the new post to the array
  // Find the closing bracket of the array and insert before it
  const arrayEndIndex = blogPostsContent.lastIndexOf('];');

  // Check if array is empty or has posts
  const hasExistingPosts = blogPostsContent.includes('id:');

  if (hasExistingPosts) {
    // Add comma and new post
    const insertPosition = blogPostsContent.lastIndexOf('}', arrayEndIndex);
    const afterLastPost = blogPostsContent.indexOf('\n', insertPosition);
    blogPostsContent =
      blogPostsContent.slice(0, afterLastPost) +
      ',\n' +
      newPostString +
      '\n' +
      blogPostsContent.slice(afterLastPost);
  } else {
    // First post, just insert
    blogPostsContent = blogPostsContent.replace(
      /export const blogPosts = \[(.*?)\];/s,
      `export const blogPosts = [\n${newPostString}\n];`
    );
  }

  // Write back to file
  fs.writeFileSync(blogPostsPath, blogPostsContent, 'utf8');

  console.log('\n✅ Blog post created successfully!');
  console.log(`\n📍 Post details:`);
  console.log(`   ID: ${newPost.id}`);
  console.log(`   Title: ${newPost.title}`);
  console.log(`   Slug: ${newPost.slug}`);
  console.log(`   URL: /blog/${newPost.slug}`);
  console.log(`   Date: ${newPost.date}`);
  console.log(`   Read Time: ${newPost.readTime}`);
  console.log(`\n🌐 View your post at: https://kwamenyantakyi.com/#/blog/${newPost.slug}`);
  console.log('\n💡 Don\'t forget to run "npm run deploy" to publish your changes!\n');

  rl.close();
}

main().catch(error => {
  console.error('❌ Error:', error.message);
  rl.close();
  process.exit(1);
});
