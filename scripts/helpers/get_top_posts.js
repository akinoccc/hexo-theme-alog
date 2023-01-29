hexo.extend.helper.register('get_top_posts', function (topK) {
  const topPosts = hexo.locals.get('posts').data.sort((a, b) => b.top - a.top).filter(item => item.top !== undefined);
  return topPosts;
});