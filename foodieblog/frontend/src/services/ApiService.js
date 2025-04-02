import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api'; // Adjust if your backend is on a different port/address

const ApiService = {
  getBlogs: () => axios.get(`${API_BASE_URL}/blogs`).then((res) => res.data),
  getBlog: (id) => axios.get(`${API_BASE_URL}/blogs/${id}`).then((res) => res.data),
  createBlog: (blog) => axios.post(`${API_BASE_URL}/blogs`, blog).then((res) => res.data),
  deleteBlog: (id) => axios.delete(`${API_BASE_URL}/blogs/${id}`),
  createUser: (user) => axios.post(`${API_BASE_URL}/users/signup`, user).then((res) => res.data),
  loginUser: (user) => axios.post(`${API_BASE_URL}/users/login`, user).then((res) => res.data),
};

export default ApiService;