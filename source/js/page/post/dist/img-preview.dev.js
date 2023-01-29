"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _scroll = _interopRequireDefault(require("../../utils/scroll.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ImgPreview =
/*#__PURE__*/
function () {
  function ImgPreview() {
    _classCallCheck(this, ImgPreview);

    // Bind click events for the image preview component.
    $('.post-content img').on('click', ImgPreview.onImgPreviewOpen);
    $('.preview-overlay').on('click', ImgPreview.onImgPreviewClose);
    $('.preview-wrapper > .img-list').on('click', ImgPreview.onImgSelected);
    $('.preview-overlay img').on('click', function (e) {
      return e.stopPropagation();
    });
  }

  _createClass(ImgPreview, null, [{
    key: "onImgPreviewOpen",
    value: function onImgPreviewOpen() {
      _scroll["default"].unscroll();

      var imgSrc = $(this).attr('src');
      $('.preview-wrapper').children('.preview-img').attr('src', imgSrc);
      $('.preview-overlay').fadeIn(500);

      var _ImgPreview$_getPostI = ImgPreview._getPostImgList($(this)),
          imgList = _ImgPreview$_getPostI.imgList,
          curSelectedIndex = _ImgPreview$_getPostI.curSelectedIndex; // Insert a list of article images.


      $('.preview-wrapper > .img-list').html(imgList); // Init the selected style for the list.

      var $target = $('.preview-wrapper > .img-list > li').eq(curSelectedIndex);

      if ($target.hasClass('selected') === false) {
        $('.preview-wrapper > .img-list > li[class*="selected"]').removeClass('selected');
        $target.addClass('selected');
        var scrollLeft = ($target.index() - 1) * 80 - $target.parent().outerHeight() / 2;
        $('.preview-wrapper > .img-list').animate({
          scrollLeft: scrollLeft
        }, 300);
      }
    }
  }, {
    key: "onImgPreviewClose",
    value: function onImgPreviewClose() {
      $('.preview-overlay').fadeOut(500);
      setTimeout(_scroll["default"].allowScroll, 500);
    }
  }, {
    key: "onImgSelected",
    value: function onImgSelected(e) {
      e.stopPropagation();
      var targetTagName = e.target.tagName.toLowerCase();
      var $target = targetTagName === 'li' ? $(e.target) : $(e.target).parent();

      if (targetTagName === 'ul' || $target.hasClass('selected')) {
        return;
      }

      var $curSelected = $('.preview-wrapper > .img-list > li[class*="selected"]');
      $curSelected.removeClass('selected');
      $target.addClass('selected');
      $('.preview-wrapper > .preview-img').attr('src', $target.children('img').attr('src'));
    }
  }, {
    key: "_getPostImgList",
    value: function _getPostImgList($curPreview) {
      var imgList = [];
      var $imgs = $('.post-content img');
      var i = 0,
          curSelectedIndex = 0;
      $imgs.each(function () {
        var $img = $(this);

        if ($curPreview.is($(this))) {
          curSelectedIndex = i;
        }

        var src = $img.attr('src');
        imgList.push("<li class=\"flex flex-justify-center flex-align-center\"><img src=\"".concat(src, "\" /></li>"));
        i++;
      });
      return {
        imgList: imgList.join(''),
        curSelectedIndex: curSelectedIndex
      };
    }
  }]);

  return ImgPreview;
}();

exports["default"] = ImgPreview;