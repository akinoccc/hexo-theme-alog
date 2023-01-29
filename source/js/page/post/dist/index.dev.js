"use strict";

var _imgPreview = _interopRequireDefault(require("./img-preview.js"));

var _aside = require("./aside.js");

var _scroll = _interopRequireDefault(require("../../utils/scroll.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

$(function () {
  new _scroll["default"]();
  new _aside.Toc();
  new _imgPreview["default"]();
});