"use strict";

hexo.extend.helper.register('list_menu', function (menu) {
  var list = menu.map(function (item) {
    return "<li class=\"menu-item\"}><a href=\"".concat(item.path, "\" title=\"").concat(item.name, "\">").concat(item.name, "</a></li>");
  });
  return list.join('');
});