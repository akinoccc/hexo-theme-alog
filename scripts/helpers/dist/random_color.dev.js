"use strict";

hexo.extend.helper.register('random_color', function () {
  var COLOR_CLASSES = ['purple', 'orange', 'red', 'grey', 'blue'];
  return "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
});