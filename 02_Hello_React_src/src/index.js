//引入react核心库
import React from 'react';
//引入reactDom
import ReactDOM from 'react-dom/client';
//引入App组件
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);