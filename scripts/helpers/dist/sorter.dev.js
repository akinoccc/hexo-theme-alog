'use strict';

var pagination = require('hexo-pagination');

hexo.extend.generator.register('sorter', function (locals) {
  var config = this.config;
  var posts = locals.posts;
  posts.data = posts.data.sort(function (a, b) {
    if (a.top && b.top) {
      if (a.top == b.top) {
        return b.updated - a.updated;
      } else {
        return b.top - a.top;
      }
    } else if (a.top && !b.top) {
      return -1;
    } else if (!a.top && b.top) {
      return 1;
    } else {
      return b.updated - a.updated;
    }
  });
  var paginationDir = config.pagination_dir || 'page';
  return pagination('', posts, {
    perPage: config.index_generator.per_page,
    layout: ['index', 'archive'],
    format: paginationDir + '/%d/',
    data: {
      __index: true
    }
  });
});