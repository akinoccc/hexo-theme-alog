hexo.extend.helper.register('list_menu', function (menu) {
  const list = menu.map(item => {
    return `<li class="menu-item"}><a href="${item.path}" title="${item.name}">${item.name}</a></li>`
  });
  return list.join('');
});