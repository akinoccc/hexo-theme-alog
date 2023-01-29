"use strict";

var _imgPreview = _interopRequireDefault(require("./post/img-preview.js"));

var _toc = _interopRequireDefault(require("./post/toc.js"));

var _scroll = _interopRequireDefault(require("./utils/scroll.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

$(function () {
  new _scroll["default"]();
  new _toc["default"]();
  new _imgPreview["default"]();
});