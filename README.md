# Alog

> Alog is a simple and elegant hexo theme.

<div style="display: flex;">
  <img style="margin-right: 10px" src="https://img.shields.io/npm/v/hexo-theme-alog" />
  <img style="margin-right: 10px" src="https://img.shields.io/npm/dw/hexo-theme-alog"/>
  <img style="margin-right: 10px" src="https://img.shields.io/github/license/vkm0303/hexo-theme-alog"/>
</div>

## Document

[中文文档](/README.zh-CN.md) &nbsp; | &nbsp; English Document

## Live Preview

👉 <a href="https://akino.icu" target="_blank">Akino's blog</a>

## Installation

If you're using Hexo 5.0 or later:

```bash
cd blog_root_dir/
npm i hexo-theme-alog
```

Or you can clone this repository:

```bash
cd blog_root_dir/
git clone https://github.com/vkm0303/hexo-theme-alog themes/alog
```

After done this, set `theme` variable to `alog`

```yml
# _config.yml
theme: alog
```

## Configuration

### Example

Create a configuration file with the name `_config.alog.yml` at the blog root and copy the following configuration to this file.

```yml
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

page_header: 
  type: letter # custom ejs filename
  platforms: # which platform will be displayed. options: mobile and pc
   - pc
   - mobile
  apply_pages: # which page will be applied
    - message
  title: Message # option
  content:
    - First line
    - Second line
    - ...

footer:
  enable: true
  desc: My blog desc
  building_time: 2020 # The site's building time

# Open page loading animation.
loading:
  enable: true

# Open article reading statistics
busuanzi:
  enable: true

comment:
  use: valine # valine | waline | twikoo
  valine: # See the valine doc: https://valine.js.org/
    appId: your app id
    appKey: your app key
    avatar: avatar style
    placeholder:  xxx # Comment input's placeholder
    pageSize: 10 # Per page comment num
    visitor: true # Article reading statistics
    recordIP: true
  waline: # See the waline doc: https://waline.js.org/
    serverURL: # Deploy url
  twikoo: # See the twikoo doc: https://twikoo.js.org/
    envId: # env id(tencent cloud) | server url(vercel)
    region: ap-shanghai # default: ap-shanghai

# Local search depends on hexo-generator-searchdb, please install it before using local search.
local_search:
  enable: true
  top_n_per_article: 1 # The number of matches displayed per article
  preload: true
  trigger: auto
```

## Usage

### Menu

We additionally support the layouts of `project`, `message`, `links` and `about`.

Like `project`, `message`, `links` and `about`, you need to create the appropriate file at `<blog_root_dir/source>`.

Such as `Links`, you need to create `links/index.md` and Fill in the following front-matter.

```yml
---
layout: links
---
```

### Projects

After creating `/<projects_path>/index.md` and fill in the appropriate front-matter. You can write your project list in this file and no format requirements. Just split the list using `///`.

#### Example:

```md
---
layout: projects
---

/// (👈The split symbol)

## project1

Desc：this is desciption.

- First...
- Second...

Link: https://github.com/xxxx

/// (👈The split symbol)

## project2

Desc：this is desciption.

- First...
- Second...

Link: https://github.com/xxxx
```

### About

You can write content in `/<about_path>/index.md` without any restrictions.

### Sticky

Set `sticky: number` in front-matter.

```yml
sticky: 10
```

### Recommendation

By default, pinned posts are recommended. If you don't have pinned posts, recommend the last 5 posts.

### Highlight

The theme has built-in highlighting, please turn off the HEXO highlighting setting.

```yml
# _config.yml
highlight:
  enable: false
```

### Custom Page Header

if the page layout has page header, you can rewrite the header. 

#### Add Custom Page Header Template

In `alog/layout/_partial/page_headers/`, you can add your header template and use it by theme config.


**In addition to the default header, the theme also provides a built-in `letter` page header, which can be used directly through configuration.**
#### Config

```yml
# _config.alog.yml
page_header: 
  use: letter # custom ejs filename
  platforms: # which platform will be displayed. options: mobile and pc
   - pc
   - mobile
  apply_pages: # which page will be applied
    - message
  title: Message # option
  content:
    - First line
    - Second line
    - ...
```

## Contributing

Welcome issue or PR to this theme project.
