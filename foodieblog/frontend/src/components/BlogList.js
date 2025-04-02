import React, { useState, useEffect } from 'react';
import ApiService from '../services/ApiService';
import { Link } from 'react-router-dom';

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    ApiService.getBlogs().then((data) => setBlogs(data));
  }, []);

  return (
    <div className="container">
      <h2 className="card-title">Blog Posts</h2>
      <Link to="/blogs/new" className="btn btn-primary mb-4 inline-block">
        Create New Blog
      </Link>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="card">
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="card-text">{blog.content.substring(0, 100)}...</p>
            <Link to={`/blogs/${blog.id}`} className="link">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;