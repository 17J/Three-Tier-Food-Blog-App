import React, { useState, useEffect } from 'react';
import ApiService from '../services/ApiService';
import { useParams, useNavigate } from 'react-router-dom';

function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    ApiService.getBlog(id).then((data) => setBlog(data));
  }, [id]);

  const handleDelete = () => {
    ApiService.deleteBlog(id).then(() => navigate('/'));
  };

  if (!blog) return <div>Loading...</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
      <p>{blog.content}</p>
      <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">Delete</button>
    </div>
  );
}

export default BlogDetails;