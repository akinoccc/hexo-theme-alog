"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CodeBlock =
/*#__PURE__*/
function () {
  function CodeBlock() {
    _classCallCheck(this, CodeBlock);

    this._initHighlightStyle();

    $('.highlight-tool .icon-copy').on('click', this._copyCode);
    $(document).on('mouseup', this._resetCopy);
    $('.highlight-tool .icon-chevron-bottom').on('click', this._collapse);
  }

  _createClass(CodeBlock, [{
    key: "_initHighlightStyle",
    value: function _initHighlightStyle() {
      hljs.highlightAll();
      $('pre').each(function () {
        var language = $(this).children(':first')[0].result.language.toUpperCase();
        var $preMac = $("<div class=\"highlight-tool\">\n        <span></span>\n        <span></span>\n        <span></span>\n        <span class=\"language\">".concat(language, "</span>\n        <i class=\"iconfont icon-copy\"></i>\n        <i class=\"iconfont icon-chevron-bottom\" data-is-collapse=false></i>\n      </div>"));
        var height = $(this).first().outerHeight();
        $(this).wrap('<div class="code-block-container"></div>').before($preMac).css({
          height: height,
          whiteSpace: 'pre-wrap'
        }).data('height', height);
      });
    }
  }, {
    key: "_copyCode",
    value: function _copyCode() {
      try {
        var text = $(this).parent().next('pre').text();
        navigator.clipboard.writeText(text);
        $(this).removeClass('icon-copy').addClass('icon-success');
      } catch (e) {
        console.log(e);
        $(this).removeClass('icon-copy').addClass('icon-close');
      }
    }
  }, {
    key: "_resetCopy",
    value: function _resetCopy() {
      $('.highlight-tool .icon-success').removeClass('icon-success').addClass('icon-copy');
      $('.highlight-tool .icon-close').removeClass('icon-close').addClass('icon-copy');
    }
  }, {
    key: "_collapse",
    value: function _collapse() {
      var isCollapse = $(this).data('is-collapse');
      var $codeBlock = $(this).parent().next('pre');
      var height = $codeBlock.data('height');

      if (isCollapse) {
        $(this).css('transform', 'rotateZ(0)');
        $codeBlock.css('height', height);
      } else {
        $(this).css('transform', 'rotateZ(90deg)');
        $codeBlock.css('height', 0);
      }

      $(this).data('is-collapse', !isCollapse);
    }
  }]);

  return CodeBlock;
}();

exports["default"] = CodeBlock;