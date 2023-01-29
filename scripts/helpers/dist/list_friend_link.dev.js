"use strict";

hexo.extend.helper.register('list_friend_link', function (friendLinks) {
  var list = friendLinks.map(function (item) {
    return "\n      <li class=\"friend-link-item\">\n        <a class=\"flex flex-space-center\" href=\"".concat(item.link, "\" target=\"_blank\">\n          <img class=\"friend-avatar\" src=\"").concat(item.avatar, "\" />\n          <div class=\"right-box flex flex-column flex-space-around\">\n            <span class=\"friend-name ellipsis\">").concat(item.name, "</span>\n            <span class=\"friend-desc ellipsis\">").concat(item.desc ? item.desc : '这家伙很懒，什么也没写...', "</span>\n          </div>\n        </a>\n      </li>");
  });
  return "<ul class=\"friend-link-list\">".concat(list.join(''), "</ul>");
});