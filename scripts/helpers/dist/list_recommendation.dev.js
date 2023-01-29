"use strict";

hexo.extend.helper.register('list_recommendation', function () {
  // const { get_top_posts, get_latest_posts } = this;
  var data = hexo.locals.get('data').recommendedList;
  var recommendedList = [];

  if (data) {
    recommendedList = data.recommendation;
  } else {
    // recommendedList = get_top_posts(5);
    // if (recommendedList.length === 0) {
    //   recommendedList = get_latest_posts(5);
    // }
    recommendedList = hexo.locals.get('posts').slice(0, 5);
  }

  var templates = [];
  recommendedList.forEach(function (item) {
    templates.push("\n      <a href=\"".concat(item.path, "\" data-shutter-title=\"").concat(item.title, "\">\n        <img src=\"").concat(item.cover ? item.cover : '/images/no-cover.png', "\" alt=\"").concat(item.title, "\">\n      </a>\n    "));
  });
  return templates.join('');
});