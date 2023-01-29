"use strict";

hexo.extend.helper.register('get_top_posts', function (topK) {
  var topPosts = hexo.locals.get('posts').data.sort(function (a, b) {
    return b.top - a.top;
  }).filter(function (item) {
    return item.top !== undefined;
  });
  return topPosts;
});