// src/api/user.ts
import request from './index';

// 登录
export function login(data: { username, password }) {
  return request.post('/user/login', data);
}

// 获取用户信息
export function getUserInfo() {
  return request.get('/user/info');
}
