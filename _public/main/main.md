% 前端技术分享
% 李森
% Email: lisen04@baidu.com

# Hybrid App Framework

## node-webkit

- nodejs + chromium(webkit内核)
-
    hex      javascript  有道词典  
    Qt       c++         Battle.net(Blizzard)  
    wxPython python  

- - -

### Node.js 简介

- 单线程非阻塞, 异步编程的语言  
- javascript/v8

    目前性能最高的js引擎  
    http://www.xuanfengge.com/why-v8-so-fast.html

- - -

### Chromium 简介

- Google公司开发的网页浏览器，是开源的, 吸引开发者贡献代码， 特性首先出现在该版本上, 更新非常快  
- Chrome则是在Chromium的基础上开发的版本，不是开源的(dev, beta, stable)

    沙盒特性，V8引擎

- - -

# node-webkit 介绍

- - -

### node-webkit 的优点

- 开发简单，易维护，基于Web(HTML + CSS + Javascript)开发方式
- 跨平台 (grunt-node-webkit-builder实现各平台打包)
- nodejs的丰富的第三方库和社区支持(大部分项目均在github.com)(issue 管理, patch 管理)
- 非常方面的控制台调试

- - -

### node-webkit 的一些桌面特性

- 在线音视频(webRTC)
- 自定义窗口
- 系统菜单、托盘、(桌面提醒)
- 文件系统输入/输出流
- snapshot(文件快照，项目文件存档)
- WebSocket
- CSS3, HTML5, Drag&Drop, WebGL, FileDialogs

- - -

### node-webkit 基于开发并发布的项目

- 1 nodewebkit-qq

- 2 Game Dev Tycoon (游戏开发巨头)

- 3 Light Table (DEV IDE, http://www.lighttable.com/) 

    https://github.com/rogerwang/node-webkit/wiki/List-of-apps-and-companies-using-node-webkit  

- - -

## NodeJs 的其他应用

- Haraka - SMTP Server (邮件服务器)

- Pomelo - Game Framework (nio)

- - -

# ![baidu](images/baidu_logo.gif)  

## 谢谢大家！




