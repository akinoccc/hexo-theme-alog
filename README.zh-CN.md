# Alog

> Alog 是一款简洁、优雅的 hexo 主题。

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

创建`_config.alog.yml`主题配置文件，将下面的配置复制到这个文件并按提示配置好。

```yml
# 开启加载动画
preload:
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

## 贡献

欢迎提`issue`或者`PR`到这个主题

## 贡献者

<img src="https://raw.githubusercontent.com/hexo-theme-alog/contributors/master/contributors.svg" alt="Contributors" style="max-width: 100%;">
