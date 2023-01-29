"use strict";

hexo.extend.helper.register('get_latest_posts', function (topK) {
  var latestPosts = hexo.locals.get('posts').data;
  return latestPosts.slice(0, 5);
});