# React 学习案例 - react_staging

这是一个用于学习 React 基础和脚手架开发的练习项目。

## 常用命令

### 启动项目
```bash
npm start
```
运行后在浏览器访问 [http://localhost:3000](http://localhost:3000) 即可查看效果。

### 打包项目
```bash
npm run build
```

## 项目结构说明

- `public/`: 静态资源文件（HTML 模板、favicon 等）。
- `src/`: 源代码目录。
  - `App.js`: 根组件。
  - `index.js`: 项目入口文件。
  - `components/`: 存放公共组件。
- `01_脚手架自带文件/`: 备份的初始脚手架文件。
- `02_Hello_React_src/`: 初步练习的源码备份。

## 笔记
- 本项目已升级至 React 19。
- 使用了新的 `createRoot` API 进行渲染。
