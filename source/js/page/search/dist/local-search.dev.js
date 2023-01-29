"use strict";

var _scroll = _interopRequireDefault(require("../../utils/scroll.js"));

var _localSearchUtil = _interopRequireDefault(require("./local-search-util.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* global CONFIG, pjax, LocalSearch */
$(window).on('load', function () {
  if (!CONFIG.search.path) {
    console.warn('`hexo-generator-searchdb` plugin is not installed!');
    return;
  }

  var localSearch = new _localSearchUtil["default"]({
    path: CONFIG.search.path,
    top_n_per_article: CONFIG.search.local_search.top_n_per_article,
    unescape: CONFIG.search.local_search.unescape
  });
  var $input = $('.search-input');

  var inputEventFunction = function inputEventFunction() {
    if (!localSearch.isfetched) return;
    var searchText = $input.val().trim().toLowerCase();
    var keywords = searchText.split(/[-\s]+/);
    var $container = $('.search-result-container');
    var resultItems = [];

    if (searchText.length > 0) {
      // Perform local searching
      resultItems = localSearch.getResultItems(keywords);
    }

    if (keywords.length === 1 && keywords[0] === '') {
      $container.addClass('no-result');
      $container.html("\n        <div class=\"search-result-icon flex flex-column flex-justify-center flex-align-center\">\n          <i class=\"iconfont icon-search\"></i>\n          ".concat(CONFIG.i18n.search.tips, "\n        </div>\n      "));
    } else if (resultItems.length === 0) {
      $container.addClass('no-result');
      $container.html("\n        <div class=\"search-result-icon flex flex-column flex-justify-center flex-align-center\">\n          <i class=\"iconfont icon-sad\"></i>\n          ".concat(CONFIG.i18n.search.no_result, "\n        </div>\n      "));
    } else {
      resultItems.sort(function (left, right) {
        if (left.includedCount !== right.includedCount) {
          return right.includedCount - left.includedCount;
        } else if (left.hitCount !== right.hitCount) {
          return right.hitCount - left.hitCount;
        }

        return right.id - left.id;
      });
      var stats = CONFIG.i18n.search.result_title.replace(/\$\{resultNum}/, resultItems.length);
      $container.removeClass('no-result');
      $container.html("\n        <h3 class=\"search-stats\">".concat(stats, "</h3>\n        <hr>\n        <ul class=\"search-result-list\">").concat(resultItems.map(function (result) {
        return result.item;
      }).join(''), "</ul>\n      "));
      if ((typeof pjax === "undefined" ? "undefined" : _typeof(pjax)) === 'object') pjax.refresh(container);
    }
  };

  localSearch.highlightSearchWords($('.post-body'));

  if (CONFIG.search.local_search.preload) {
    localSearch.fetchData();
  }

  if (CONFIG.search.local_search.trigger === 'auto') {
    $input.on('input', inputEventFunction);
  } else {
    $('.search-icon').on('click', inputEventFunction);
    $input.on('keypress', function (event) {
      if (event.key === 'Enter') {
        inputEventFunction();
      }
    });
  }

  $(window).on('search:loaded', inputEventFunction); // Handle and trigger popup window

  var $searchPopOverlay = $('.search-pop-overlay');
  $('.search-popup-trigger').on('click', function () {
    _scroll["default"].unscroll();

    $searchPopOverlay.fadeIn(500);
    setTimeout(function () {
      return $input.focus();
    }, 500); // Wait for search-popup animation to complete

    if (!localSearch.isfetched) localSearch.fetchData();
  }); // Monitor main search box

  var onPopupClose = function onPopupClose() {
    $searchPopOverlay.fadeOut(500);
    setTimeout(_scroll["default"].allowScroll, 500);
  };

  $('.search-pop-overlay').on('click', function (event) {
    if ($(event.target).is($('.search-pop-overlay'))) {
      onPopupClose();
    }
  });
  $('.popup-btn-close').on('click', onPopupClose);
  $(document).on('pjax:success', function () {
    localSearch.highlightSearchWords($('.post-body'));
    onPopupClose();
  });
  $(window).on('keyup', function (event) {
    if (event.key === 'Escape') {
      onPopupClose();
    }
  });
});