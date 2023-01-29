"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LocalSearch =
/*#__PURE__*/
function () {
  function LocalSearch(_ref) {
    var _ref$path = _ref.path,
        path = _ref$path === void 0 ? '' : _ref$path,
        _ref$unescape = _ref.unescape,
        unescape = _ref$unescape === void 0 ? false : _ref$unescape,
        _ref$top_n_per_articl = _ref.top_n_per_article,
        top_n_per_article = _ref$top_n_per_articl === void 0 ? 1 : _ref$top_n_per_articl;

    _classCallCheck(this, LocalSearch);

    this.path = path;
    this.unescape = unescape;
    this.top_n_per_article = top_n_per_article;
    this.isfetched = false;
    this.datas = null;
  }

  _createClass(LocalSearch, [{
    key: "getIndexByWord",
    value: function getIndexByWord(words, text) {
      var _this = this;

      var caseSensitive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var index = [];
      var included = new Set();

      if (!caseSensitive) {
        text = text.toLowerCase();
      }

      words.forEach(function (word) {
        if (_this.unescape) {
          var div = document.createElement('div');
          div.innerText = word;
          word = div.innerHTML;
        }

        var wordLen = word.length;
        if (wordLen === 0) return;
        var startPosition = 0;
        var position = -1;

        if (!caseSensitive) {
          word = word.toLowerCase();
        }

        while ((position = text.indexOf(word, startPosition)) > -1) {
          index.push({
            position: position,
            word: word
          });
          included.add(word);
          startPosition = position + wordLen;
        }
      }); // Sort index by position of keyword

      index.sort(function (left, right) {
        if (left.position !== right.position) {
          return left.position - right.position;
        }

        return right.word.length - left.word.length;
      });
      return [index, included];
    } // Merge hits into slices

  }, {
    key: "mergeIntoSlice",
    value: function mergeIntoSlice(start, end, index) {
      var item = index[0];
      var _item = item,
          position = _item.position,
          word = _item.word;
      var hits = [];
      var count = new Set();

      while (position + word.length <= end && index.length !== 0) {
        count.add(word);
        hits.push({
          position: position,
          length: word.length
        });
        var wordEnd = position + word.length; // Move to next position of hit

        index.shift();

        while (index.length !== 0) {
          item = index[0];
          position = item.position;
          word = item.word;

          if (wordEnd > position) {
            index.shift();
          } else {
            break;
          }
        }
      }

      return {
        hits: hits,
        start: start,
        end: end,
        count: count.size
      };
    } // Highlight title and content

  }, {
    key: "highlightKeyword",
    value: function highlightKeyword(val, slice) {
      var result = '';
      var index = slice.start;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = slice.hits[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _step.value,
              position = _step$value.position,
              length = _step$value.length;
          result += val.substring(index, position);
          index = position + length;
          result += "<mark class=\"search-keyword\">".concat(val.substr(position, length), "</mark>");
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

      result += val.substring(index, slice.end);
      return result;
    }
  }, {
    key: "getResultItems",
    value: function getResultItems(keywords) {
      var _this2 = this;

      var resultItems = [];
      this.datas.forEach(function (_ref2) {
        var title = _ref2.title,
            content = _ref2.content,
            url = _ref2.url;

        // The number of different keywords included in the article.
        var _this2$getIndexByWord = _this2.getIndexByWord(keywords, title),
            _this2$getIndexByWord2 = _slicedToArray(_this2$getIndexByWord, 2),
            indexOfTitle = _this2$getIndexByWord2[0],
            keysOfTitle = _this2$getIndexByWord2[1];

        var _this2$getIndexByWord3 = _this2.getIndexByWord(keywords, content),
            _this2$getIndexByWord4 = _slicedToArray(_this2$getIndexByWord3, 2),
            indexOfContent = _this2$getIndexByWord4[0],
            keysOfContent = _this2$getIndexByWord4[1];

        var includedCount = new Set([].concat(_toConsumableArray(keysOfTitle), _toConsumableArray(keysOfContent))).size; // Show search results

        var hitCount = indexOfTitle.length + indexOfContent.length;
        if (hitCount === 0) return;
        var slicesOfTitle = [];

        if (indexOfTitle.length !== 0) {
          slicesOfTitle.push(_this2.mergeIntoSlice(0, title.length, indexOfTitle));
        }

        var slicesOfContent = [];

        while (indexOfContent.length !== 0) {
          var item = indexOfContent[0];
          var position = item.position; // Cut out 100 characters. The maxlength of .search-input is 80.

          var start = Math.max(0, position - 20);
          var end = Math.min(content.length, position + 80);
          slicesOfContent.push(_this2.mergeIntoSlice(start, end, indexOfContent));
        } // Sort slices in content by included keywords' count and hits' count


        slicesOfContent.sort(function (left, right) {
          if (left.count !== right.count) {
            return right.count - left.count;
          } else if (left.hits.length !== right.hits.length) {
            return right.hits.length - left.hits.length;
          }

          return left.start - right.start;
        }); // Select top N slices in content

        var upperBound = parseInt(_this2.top_n_per_article, 10);

        if (upperBound >= 0) {
          slicesOfContent = slicesOfContent.slice(0, upperBound);
        }

        var resultItem = '';
        url = new URL(url, location.origin);
        url.searchParams.append('highlight', keywords.join(' '));

        if (slicesOfTitle.length !== 0) {
          resultItem += "<li><a href=\"".concat(url.href, "\" class=\"search-result-title\">").concat(_this2.highlightKeyword(title, slicesOfTitle[0]), "</a>");
        } else {
          resultItem += "<li><a href=\"".concat(url.href, "\" class=\"search-result-title\">").concat(title, "</a>");
        }

        slicesOfContent.forEach(function (slice) {
          resultItem += "<a href=\"".concat(url.href, "\"><p class=\"search-result\">").concat(_this2.highlightKeyword(content, slice), "...</p></a>");
        });
        resultItem += '</li>';
        resultItems.push({
          item: resultItem,
          id: resultItems.length,
          hitCount: hitCount,
          includedCount: includedCount
        });
      });
      return resultItems;
    }
  }, {
    key: "fetchData",
    value: function fetchData() {
      var _this3 = this;

      var isXml = !this.path.endsWith('json');
      fetch(this.path).then(function (response) {
        return response.text();
      }).then(function (res) {
        // Get the contents from search data
        _this3.isfetched = true;
        _this3.datas = isXml ? _toConsumableArray(new DOMParser().parseFromString(res, 'text/xml').querySelectorAll('entry')).map(function (element) {
          return {
            title: element.querySelector('title').textContent,
            content: element.querySelector('content').textContent,
            url: element.querySelector('url').textContent
          };
        }) : JSON.parse(res); // Only match articles with non-empty titles

        _this3.datas = _this3.datas.filter(function (data) {
          return data.title;
        }).map(function (data) {
          data.title = data.title.trim();
          data.content = data.content ? data.content.trim().replace(/<[^>]+>/g, '') : '';
          data.url = decodeURIComponent(data.url).replace(/\/{2,}/g, '/');
          return data;
        }); // Remove loading animation

        window.dispatchEvent(new Event('search:loaded'));
      });
    } // Highlight by wrapping node in mark elements with the given class name

  }, {
    key: "highlightText",
    value: function highlightText(node, slice, className) {
      var val = node.nodeValue;
      var index = slice.start;
      var children = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = slice.hits[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _step2$value = _step2.value,
              position = _step2$value.position,
              length = _step2$value.length;
          var text = document.createTextNode(val.substring(index, position));
          index = position + length;
          var mark = document.createElement('mark');
          mark.className = className;
          mark.appendChild(document.createTextNode(val.substr(position, length)));
          children.push(text, mark);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      node.nodeValue = val.substring(index, slice.end);
      children.forEach(function (element) {
        node.parentNode.insertBefore(element, node);
      });
    } // Highlight the search words provided in the url in the text

  }, {
    key: "highlightSearchWords",
    value: function highlightSearchWords(body) {
      var _this4 = this;

      var params = new URL(location.href).searchParams.get('highlight');
      var keywords = params ? params.split(' ') : [];
      if (!keywords.length || !body) return;
      var walk = document.createTreeWalker(body, NodeFilter.SHOW_TEXT, null);
      var allNodes = [];

      while (walk.nextNode()) {
        if (!walk.currentNode.parentNode.matches('button, select, textarea')) allNodes.push(walk.currentNode);
      }

      allNodes.forEach(function (node) {
        var _this4$getIndexByWord = _this4.getIndexByWord(keywords, node.nodeValue),
            _this4$getIndexByWord2 = _slicedToArray(_this4$getIndexByWord, 1),
            indexOfNode = _this4$getIndexByWord2[0];

        if (!indexOfNode.length) return;

        var slice = _this4.mergeIntoSlice(0, node.nodeValue.length, indexOfNode);

        _this4.highlightText(node, slice, 'search-keyword');
      });
    }
  }]);

  return LocalSearch;
}();