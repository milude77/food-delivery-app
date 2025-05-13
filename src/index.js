import React from 'react';
import { createRoot } from 'react-dom/client'; // 从 react-dom/client 导入 createRoot
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

// 1. 获取根容器
const container = document.getElementById('root');
// 2. 创建根实例
const root = createRoot(container);
// 3. 渲染应用
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);