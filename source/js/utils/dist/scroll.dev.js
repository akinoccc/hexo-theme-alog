"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Scroll =
/*#__PURE__*/
function () {
  function Scroll() {
    _classCallCheck(this, Scroll);

    this.keepScrollBarPos();
    $(window).bind('beforeunload', this._recordScrollBarPos);
  }

  _createClass(Scroll, [{
    key: "keepScrollBarPos",
    value: function keepScrollBarPos() {
      var scrollTop = Number(localStorage.getItem("scrollBar-".concat(location.href))) || 0;
      $('html, body').animate({
        scrollTop: scrollTop
      }, 500);

      if (scrollTop === 0) {
        localStorage.clear();
      }
    }
  }, {
    key: "_recordScrollBarPos",
    value: function _recordScrollBarPos() {
      localStorage.setItem("scrollBar-".concat(location.href), $(document).scrollTop());
    }
  }], [{
    key: "unscroll",
    value: function unscroll() {
      $('body').addClass('unscroll');
    }
  }, {
    key: "allowScroll",
    value: function allowScroll() {
      $('body').removeClass('unscroll');
    }
  }]);

  return Scroll;
}();

exports["default"] = Scroll;