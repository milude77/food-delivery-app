// src/api/index.ts
import axios from 'axios';

const service = axios.create({
  baseURL: '/api',          // 统一的 base url
  timeout: 10000,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    if (response.data.code !== 200) {
      // 全局错误处理
      return Promise.reject(response.data.message || 'Error');
    }
    return response.data.data; // 统一返回 data
  },
  (error) => {
    // 可统一处理 401、500 等错误
    console.error('Network error:', error);
    return Promise.reject(error);
  }
);

export default service;
