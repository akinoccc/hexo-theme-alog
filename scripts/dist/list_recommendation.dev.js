"use strict";

hexo.extend.helper.register('list_recommendation', function () {
  var data = hexo.locals.get('data').recommendedList;
  var recommendedList = [];

  if (data) {
    recommendedList = data.recommendation;
  } else {
    recommendedList = hexo.extend.helper.get('get_top_posts').bind(hexo)(5);

    if (recommendedList.length === 0) {
      recommendedList = hexo.extend.helper.get('get_latest_posts').bind(hexo)(5);
    }
  }

  var templates = [];
  recommendedList.forEach(function (item) {
    console.log(item.title);
    templates.push("\n      <a href=\"".concat(item.path, "\" data-shutter-title=\"").concat(item.title, "\">\n        <img src=\"").concat(item.cover ? item.cover : '/images/no-cover.png', "\" alt=\"").concat(item.title, "\">\n      </a>\n    "));
  });
  return templates.join('');
});