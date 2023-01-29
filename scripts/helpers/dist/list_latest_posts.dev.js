"use strict";

hexo.extend.helper.register('list_latest_posts', function (topK) {
  var url_for = this.url_for,
      date = this.date;
  var latestPosts = hexo.locals.get('posts').sort('-date');
  var latestList = latestPosts.slice(0, 5).map(function (item) {
    return "\n    <li class=\"latest-post\">\n      <a class=\"post-link\" href=\"".concat(url_for(item.path), "\">\n        <img class=\"post-cover\" src=\"").concat(item.cover ? item.cover : '/images/no-cover.png', "\" />\n        <div class=\"post-info\">\n          <span class=\"title\">").concat(item.title, "</span>\n          <span class=\"time\">").concat(date(item.date, 'YYYY-MM-DD'), "</span>\n        </div>\n      </a>\n    </li>\n  ");
  });
  return "<ul class=\"latest-post-list\">".concat(latestList.join(''), "</ul>");
});