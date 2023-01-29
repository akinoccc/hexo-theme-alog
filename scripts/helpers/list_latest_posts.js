hexo.extend.helper.register('list_latest_posts', function (topK) {
  const { url_for, date } = this;
  const latestPosts = hexo.locals.get('posts').sort('-date');
  const latestList = latestPosts.slice(0, 5).map(item => `
    <li class="latest-post">
      <a class="post-link" href="${url_for(item.path)}">
        <img class="post-cover" src="${item.cover ? item.cover : '/images/no-cover.png'}" />
        <div class="post-info">
          <span class="title">${item.title}</span>
          <span class="time">${date(item.date, 'YYYY-MM-DD')}</span>
        </div>
      </a>
    </li>
  `);
  return `<ul class="latest-post-list">${latestList.join('')}</ul>`
});