"use strict";

var _bgAnimation = _interopRequireDefault(require("./page/bg-animation.js"));

var _codeblock = _interopRequireDefault(require("./page/codeblock.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

$(function () {
  new _bgAnimation["default"]();
  new _codeblock["default"](); // let pjax = new Pjax({
  //   elements: "a",
  //   selectors: [".page-container"],//填写要改变的部分，标签直接写标签名，id选择器需要加#，类名需要加.
  //   history: true, //是否添加近浏览器历史记录
  //   pushState: true,//是否启用 pushState。禁用后 Pjax 就变成了 Ajax。
  //   scrollRestoration: false,//切换页面后，Pjax 将尝试恢复滚动位置。
  //   cacheBust: false, //是否在 URL 上添加时间戳，防止浏览器缓存。
  //   debug: false
  // });
});