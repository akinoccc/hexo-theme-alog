"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Toc =
/*#__PURE__*/
function () {
  function Toc() {
    _classCallCheck(this, Toc);

    this.tocTrack();
    $(window).on('scroll', this.tocTrack);
    $('.post-toc a').on('click', this.jumpToHeader);
  } // Override the default jump event.


  _createClass(Toc, [{
    key: "jumpToHeader",
    value: function jumpToHeader(e) {
      e.preventDefault();
      var $target = $($(this).attr('href'));

      if ($target.length > 0) {
        var scrollTop = $target.offset().top - $('.main-header').outerHeight() - 20;
        $('html, body').animate({
          scrollTop: scrollTop
        }, 500);
      }
    }
  }, {
    key: "tocTrack",
    value: function tocTrack() {
      var $headers = $('.post-content > :header');

      if ($headers.length) {
        var $currentHeading = $headers.first();
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = $headers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var heading = _step.value;
            var $heading = $(heading);
            var top = $heading.offset().top - $(document).scrollTop() - $('.main-header').outerHeight();

            if (top > 40) {
              break;
            }

            $currentHeading = $heading;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        if ($currentHeading.length) {
          var anchorName = $currentHeading.attr('id');
          var $tocItem = $(".toc-link[href=\"#".concat(anchorName, "\"]"));

          if (!$tocItem.hasClass('toc-active')) {
            $('.toc-active').removeClass('toc-active');
            $tocItem.addClass('toc-active');
          }
        }
      }
    }
  }]);

  return Toc;
}();

exports["default"] = Toc;