import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  
  {
    id: "how-accurate-is-snowdaycalculator",
    title: "How Accurate Is The Snow Day Calculator",
    image: "/images/snowblog1(i).jpg",
    description: "Discover how accurate the Snow Day Calculator predicts school closures.",

  },
];

const Blog = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-[hsl(213,94%,68%)] to-blue-400 bg-clip-text text-transparent mb-8">
        Snow Day Calculator Blogs
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <Link to={`/blog/${blog.id}`} key={blog.id} className="block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-900">{blog.title}</h2>
              <p className="text-gray-600 mt-2">{blog.description}</p>
              <span className="text-[hsl(213,94%,68%)] font-semibold hover:underline mt-3 inline-block">Read More →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
