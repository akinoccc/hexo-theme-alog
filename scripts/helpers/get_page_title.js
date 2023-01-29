hexo.extend.helper.register('get_page_title', function (mainMenuList, curPath) {
  const menuList = hexo.locals.get('categories').data.map(item => ({ name: item.name, path: item.path.replace(/\//g, "") }));
  menuList.push(...mainMenuList.map(item => ({ name: item.name, path: item.path.replace(/\//g, "") })));
  const end = curPath.lastIndexOf("/");
  curPath = curPath.substring(0, end).replace(/(\/|page.*)/g, "");
  for (let item of menuList) {
    if (curPath && item.path === curPath) {
      return item.name;
    }
  }
});