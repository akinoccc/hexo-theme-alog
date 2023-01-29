# Alog

> Alog is a simple and elegant hexo theme.

## Document

[中文文档](/README.zh-CN.md) &nbsp; | &nbsp; English Document

## Live Preview

👉 [Akino's blog](https://akino.icu)

## Installation

If you're using Hexo 5.0 or later:

```bash
cd blog_root_dir/
npm i hexo-theme-alog
```

Or you can clone this repository:

```bash
cd blog_root_dir/
$ git clone https://github.com/vkm0303/hexo-theme-alog themes/alog
```

After done this, set `theme` variable to `alog`

```yml
# _config.yml
theme: alog
```

## Configuration

Create a configuration file with the name `_config.alog.yml` at the blog root and copy the following configuration to this file.

```yml
# Open loading animation.
preload:
  enable: bolean

# Open article reading statistics
busuanzi:
  enable: boolean

# See the valine doc: https://valine.js.org/
valine:
  enable: boolean
  appId: string
  appKey: string
  avatar: string
  placeholder: string # Comment input's placeholder
  pageSize: number # Per page comment num.
  visitor: boolean # Article reading statistics
  recordIP: boolean

# Local search depends on hexo-generator-searchdb, please install it before using local search.
local_search:
  enable: boolean
  top_n_per_article: number # The number of matches displayed per article
  preload: true
  trigger: auto
```

## Contributing

We're welcome issue or PR to this hexo theme.

## Contributors

<img src="https://raw.githubusercontent.com/hexo-theme-alog/contributors/master/contributors.svg" alt="Contributors" style="max-width: 100%;">
