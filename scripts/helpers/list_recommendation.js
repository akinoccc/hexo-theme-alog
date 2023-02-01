hexo.extend.helper.register('list_recommendation', function () {
  const { get_top_posts, get_latest_posts } = this;
  const data = hexo.locals.get('data').recommendedList;
  let recommendedList = [];
  if (data) {
    recommendedList = data.recommendation;
  } else {
    recommendedList = get_top_posts();
    if (recommendedList.length === 0) {
      recommendedList = get_latest_posts(5);
    }
  }

  const templates = [];
  recommendedList.forEach(item => {
    templates.push(`
      <a href="${item.path}" data-shutter-title="${item.title}">
        <img src="${item.cover ? item.cover : '/images/no-cover.png'}" alt="${item.title}">
      </a>
    `);
  });
  return templates.join('');
});