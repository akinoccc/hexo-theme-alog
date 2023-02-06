hexo.extend.helper.register('get_top_posts', function (topK) {
  const topPosts = hexo.locals.get('posts').filter(item => item.sticky !== undefined);
  return topPosts;
});