"use strict";

hexo.extend.helper.register('get_top_posts', function (topK) {
  var topPosts = hexo.locals.get('posts').filter(function (item) {
    return item.sticky !== undefined;
  });
  return topPosts;
});