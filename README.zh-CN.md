# Alog

> Alog 是一款简洁、优雅的 hexo 主题。

<div style="display: flex;">
  <img style="margin-right: 10px" src="https://img.shields.io/npm/v/hexo-theme-alog" />
  <img style="margin-right: 10px" src="https://img.shields.io/npm/dw/hexo-theme-alog"/>
  <img style="margin-right: 10px" src="https://img.shields.io/github/license/vkm0303/hexo-theme-alog"/>
</div>

## 文档

中文文档 &nbsp; | &nbsp; [English Document](/README.md)

## 在线预览

👉 <a href="https://akino.icu" target="_blank">Akino's blog</a>

## 安装

如果你使用`Hexo5.0+`：

```bash
cd blog_root_dir/
npm i hexo-theme-alog
```

或者直接克隆这个仓库

```bash
cd blog_root_dir/
git clone https://github.com/vkm0303/hexo-theme-alog themes/alog
```

完成之后，打开`hexo配置文件`，将`theme`设置为`alog`

```yml
# _config.yml
theme: alog
```

## 配置

在博客根目录创建`_config.alog.yml`主题配置文件，将下面的配置复制到这个文件并按提示配置好。

```yml
# _config.alog.yml
menu:
  - name: Home
    path: /
  - name: Projects
    path: /projects
  - name: Message
    path: /message
  - name: Links
    path: /links
  - name: About
    path: /about

links:
  site_info:
    name: Alog
    link: https://akino.icu
    icon: https://akino.icu/images/avatar.jpg
  apply_tips: Apply format:\nName：xxxx\ndesc:xxx\nLink：xxx\nIcon：xxx
  link_list:
    - name: Akino
      avatar: /images/avatar.jpg
      link: https://akino.icu
      desc: Akino's blog.

page_header: 
  type: letter # 模板文件名
  platforms: # 自定义的page header将在哪些设备端上展示，不展示自定义header的设备端将使用默认的page header
   - pc
   - mobile
  apply_pages: # 应用到哪些页面(布局)
    - message
  title: Message # 可选配置项，根据自己需求
  content:
    - First line
    - Second line
    - ...

footer:
  enable: true
  building_time: 2023 # 建站时间

# 开启页面加载动画
loading:
  enable: true

# 开启文章阅读次数统计
busuanzi:
  enable: true

comment:
  use: valine # valine | waline | twikoo
  valine: # 配置详见valine官方文档: https://valine.js.org/
    appId: your app id
    appKey: your app key
    avatar: avatar style
    placeholder:  xxx # 评论输入框占位文字
    pageSize: 10 # 评论列表每一页的评论数量
    visitor: true # 文章阅读次数统计
    recordIP: true
  waline: # 配置详见waline官方文档: https://waline.js.org/
    serverURL: # 部署 url
  twikoo: # 配置详见twikoo官方文档: https://twikoo.js.org/
    envId: # 腾讯云填 env id，Vercel填部署的 server url
    region: ap-shanghai # default: ap-shanghai

# 本地搜索依赖hexo-generator-searchdb，在使用前请先安装该依赖
local_search:
  enable: true
  top_n_per_article: 1 # 每篇文章显示的搜索匹配数量
  preload: true # 预加载数据
  trigger: auto
```

## 使用

### 菜单及导航

主题额外支持以下几种布局 `project`、`message`、`links`、`about`。

如果你需要创建 `project`、`message`、`links`、`about` 这几种布局的页面，你必须在 `<blog_root_dir/source>` 下创建相应的文件。

比如 `友链` 页面, 你需要创建 `links/index.md` 并且 在 `links/index.md` 文件头设置好对应的标题和布局。

```yml
---
layout: links
---
```

### 项目列表

创建 `/<projects_path>/index.md` 并填写对应的头部之后. 你可以在该文件中填写你的项目列表，项目内容没有格式要求，只需要使用 `///` 分割每一个项目即可。

#### Example

```md
---
layout: projects
---

/// (👈The split symbol)

## 项目 1

项目描述：xxx

- xxx...
- xxx...

链接: https://github.com/xxxx

/// (👈 分割符号)

## 项目 2

项目描述：xxx

- xxx...
- xxx...

链接: https://github.com/xxxx
```

### 关于

你可以随意地撰写内容在`/<about_path>/index.md`，没有任何限制。

### 文章置顶

在文章头部配置中添加 `sticky: level` 即可。

```yml
sticky: 10
```

### 首页轮播推荐

默认推荐置顶文章，若无置顶则推荐最新发表的 5 篇文章。

### 代码高亮

主题已内置高亮，请关闭 hexo 的代码高亮设置。

```yml
# _config.yml
highlight:
  enable: false
```

### 自定义页面头部

如果页面布局包含页面头部，你可以重写头部。

#### 添加自定义页面头部模板

在 `alog/layout/_partial/page_headers/` 目录下，你可以添加你的头部模板，并通过主题配置来使用它。

**主题除了默认头部外，另外内置了 `letter` 页面头部，可直接通过配置使用。**

#### 配置
```yml
# _config.alog.yml
page_header: 
  use: letter # 自定义的 ejs 文件名
  platforms: # 将显示在哪些平台上。选项: mobile 和 pc
   - pc
   - mobile
  apply_pages: # 将应用于哪些页面
    - message
  title: Message # 可选项
  content:
    - 第一行
    - 第二行
    - ...
```

请根据上述文档中的指示进行自定义页面头部的设置。

## 贡献

欢迎提`issue`或者`PR`到这个主题。
