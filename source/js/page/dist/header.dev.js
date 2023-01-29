"use strict";

var _getRelativePath = _interopRequireDefault(require("../utils/getRelativePath.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

$(function () {
  initActiveMenu();
  $(window).on('scroll', onScroll); // If current path equals target path, do nothing.

  $('a').on('click', onMenuClick);
});

function initActiveMenu() {
  var menuList = [];
  $('.menu li a').each(function () {
    var href = $(this).attr('href');
    href && menuList.push({
      instance: $(this).parent(),
      path: href.replace(/\//g, "")
    });
  });
  var curRelativePath = (0, _getRelativePath["default"])();

  for (var _i = 0, _menuList = menuList; _i < _menuList.length; _i++) {
    var item = _menuList[_i];

    if (item.path === curRelativePath) {
      item.instance.addClass("active");
    }
  }
}

function onScroll() {
  var $header = $('.main-header');
  var scrollTop = $(window).scrollTop();

  if (scrollTop === 0) {
    $header.css('background-color', 'rgba(0, 0, 0, 1)');
  } else if ($header.css('background-color') !== 'rgba(0, 0, 0, 0.9)') {
    $header.css('background-color', 'rgba(0, 0, 0, 0.9)');
  }
}

function onMenuClick(e) {
  if ($(this).attr('href').replace(/\//g, "") === (0, _getRelativePath["default"])()) {
    e.preventDefault();
  }
}