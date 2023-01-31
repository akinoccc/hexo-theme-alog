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

👉 [Akino's blog](https://akino.icu)

## 安装

如果你使用`Hexo5.0+`：

```bash
cd blog_root_dir/
npm i hexo-theme-alog
```

或者直接克隆这个仓库

```bash
cd blog_root_dir/
$ git clone https://github.com/vkm0303/hexo-theme-alog themes/alog
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
  - name: Project
    path: /project
  - name: Message
    path: /message
  - name: Link
    path: /friend-link
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

footer:
  enable: boolean
  building_time: time string # 建站时间

# 开启页面加载动画
loading:
  enable: bolean

# 开启文章阅读次数统计
busuanzi:
  enable: boolean

# 配置详见valine官方文档: https://valine.js.org/
valine:
  enable: boolean
  appId: string
  appKey: string
  avatar: string
  placeholder: string # 评论输入框占位文字
  pageSize: number # 评论列表每一页的评论数量
  visitor: boolean # 文章阅读次数统计
  recordIP: boolean

# 本地搜索依赖hexo-generator-searchdb，在使用前请先安装该依赖
local_search:
  enable: boolean
  top_n_per_article: number # 每篇文章显示的搜索匹配数量
  preload: true # 预加载数据
  trigger: auto
```

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

## 贡献

欢迎提`issue`或者`PR`到这个主题
