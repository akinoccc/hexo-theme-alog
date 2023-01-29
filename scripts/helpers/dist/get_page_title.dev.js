"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

hexo.extend.helper.register('get_page_title', function (mainMenuList, curPath) {
  var menuList = hexo.locals.get('categories').data.map(function (item) {
    return {
      name: item.name,
      path: item.path.replace(/\//g, "")
    };
  });
  menuList.push.apply(menuList, _toConsumableArray(mainMenuList.map(function (item) {
    return {
      name: item.name,
      path: item.path.replace(/\//g, "")
    };
  })));
  var end = curPath.lastIndexOf("/");
  curPath = curPath.substring(0, end).replace(/(\/|page.*)/g, "");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = menuList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      if (curPath && item.path === curPath) {
        return item.name;
      }
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
});