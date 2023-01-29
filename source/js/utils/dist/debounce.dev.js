"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = debounce;

function debounce(fn, delay) {
  var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var timer = null;
  var isInvoke = false;

  var _debounce = function _debounce() {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timer) clearTimeout(timer);

    if (immediate && !isInvoke) {
      fn.apply(this, args);
      timer = null;
      isInvoke = true;
    } else {
      timer = setTimeout(function () {
        fn.apply(_this, args);
        timer = null;
        isInvoke = false;
      }, delay);
    }
  }; // Cancel.


  _debounce.cancel = function () {
    clearTimeout(timer);
    isInvoke = false;
  };

  return _debounce;
}