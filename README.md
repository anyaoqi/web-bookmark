# 前端书签

## 环境要求

* Node: 16.0 或更高版本

## 技术栈

* **前端框架：Vue3**
* **状态管理：Pinia**
* **打包工具：Vite**
* **CSS处理：Tailwindcss Sass**
* **代码检测：Eslint**
* **代码格式化：Prettier**
* **HTTP库：Axios**

**相关文档**

* Vue3：https://cn.vuejs.org/
* Ant Design：https://antdv.com/components/overview-cn
* 代码规范：https://standardjs.com/rules-zhcn
* Eslint规则：https://zh-hans.eslint.org/docs/latest/rules
* Prettier规则：https://www.prettier.cn/docs/options.html

## vscode插件

* ESlint  代码格式和代码质量校验
* Prettier - Code formatter  代码格式化
* Prettier ESlint  解决ESlint和Prettier冲突问题

## 目录结构

* src
  * api   接口
  * assets 静态资源
    * styles 样式
      * variables.scss 全局变量
      * main.scss 公共样式
      * normalize.scss 样式重置
    * images 图片
  * components  组件
  * hooks 自定义Hook
  * router  路由
  * store  pinia状态管理
  * views 页面视图
  * App.vue 根组件
  * main.js   程序入口
* .eslintrc.cjs  ESlint规则配置
* .gitignore   git文件包含规则
* .prettierrc.json Prettier规则配置
* index.html
* vite.config.js 	vite配置

## 命令

* 启动项目

  ```
  npm run dev
  ```
* 打包编译

  ```
  npm run build
  ```
* 预览打包编译后的项目

  ```
  npm run preview
  ```
* 使用ESlint代码自动修复

  ```
  npm run lint
  ```
* 使用Prettier代码格式化

  ```
  npm run format
  ```
