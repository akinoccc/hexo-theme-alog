hexo.extend.helper.register('list_friend_link', function (friendLinks) {
  const list = friendLinks.map(item => {
    return `
      <li class="friend-link-item">
        <a class="flex flex-space-center" href="${item.link}" target="_blank">
          <img class="friend-avatar" src="${item.avatar}" />
          <div class="right-box flex flex-column flex-space-around">
            <span class="friend-name ellipsis">${item.name}</span>
            <span class="friend-desc ellipsis">${item.desc ? item.desc : '这家伙很懒，什么也没写...'}</span>
          </div>
        </a>
      </li>`
  });
  return `<ul class="friend-link-list">${list.join('')}</ul>`;
});