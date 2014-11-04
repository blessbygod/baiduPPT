% 转正述职
% 李森
% Email: lisen04@baidu.com

# 百度云加速![yjs](http://static-fhl-rd.baidu.com/static/app/images/logo-w.png)

- - -

### 前端项目重构

- 旧： django模板（后台渲染模板，数据由django的model支持)
- 新： backbone 前端MVC(前端渲染模板， 数据通过restful风格的API支持)

     
- - -

### 为什么重构?

- 前后端分离, 旧版本前端和后端耦合严重
- 独立的域名 static_fhl.baidu.com , 利于请求分流	
- 独立的项目  (http://gitlab.baidu.com/fenghuolun/website-fe)
- 独立的部署方案 (grunt 部署管理代码规范检查，单元测试，压缩，部署版本)

- - -

### 用户体验优化

- window.onload 的响应时间由之前的1.4s ~ 2s+ 多提高到现在的200ms~600ms左右
- 新设计的界面和交互方案

- - -

### 界面优化细节

- 添加网站步骤1、2、3， 明确引导用户
- 去除了干扰用户焦点的弹出框(添加网站，添加编辑子域名DNS管理属性等)
- 统计报表根据请求数的范围自动更正Y轴单位等
- 加入用户IP节点地图新元素
- 子域名虚拟进度条
- 用户剪贴板，复制长文本
  
- - -

# 项目架构

- - -

### 前端模块化

-  前端文件模块化管理(js， css， tpl) ![requirejs](http://requirejs.org/i/logo.png)
-  前端MVC(业务数据对象，视图层，url分发) ![backbone](http://cdn.code.baidu.com/imgs/backbone.js.png)
-  css模块化 ![sass](http://sass-lang.com/assets/img/logos/logo-235e394c.png)

- - -

### 其他前端库

-  简化DOM操作 ![jquery](http://cdn.code.baidu.com/imgs/jquery.png)
-  工具库 ![underscore](http://cdn.code.baidu.com/imgs/underscore.js.png)
-  统计报表工具 ![echarts](http://echarts.baidu.com/doc/asset/img/echarts-logo.png)


- - -

### 开发优化细节

- 利用跨域资源共享(CORS)， 使前端模板开发很方便(前提是不支持IE6-7, hack了requirejs-text)
- 统计报表页面可视化加载， 模块化统计报表，后期可支持用户自定义的dashboard.
- 子域名管理分页、排序、搜索 通过backbone.Router对象完美支持刷新保持状态
- 版本管理的部署优化 grunt build:[版本号](major.minor.bugfix) 多个可选参数快速部署版本


# ![baidu](images/baidu_logo.gif)  

## 谢谢大家！




