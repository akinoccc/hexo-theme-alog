import getUrlRelativePath from '../utils/getRelativePath.js';

$(function () {
  initActiveMenu();

  $(window).on('scroll', onScroll);

  // If current path equals target path, do nothing.
  $('a').on('click', onMenuClick);
});

function initActiveMenu() {
  const menuList = [];
  $('.menu li a').each(function () {
    const href = $(this).attr('href');
    href &&
      menuList.push({
        instance: $(this).parent(),
        path: href.replace(/\//g, '')
      });
  });
  const curRelativePath = getUrlRelativePath();

  for (let item of menuList) {
    if (item.path === curRelativePath) {
      item.instance.addClass('active');
    }
  }
}

function onScroll() {
  const $header = $('.main-header');
  const scrollTop = $(window).scrollTop();
  if (scrollTop < 200) {
    $header.removeClass('scrolled');
  } else if (!$header.hasClass('scrolled')) {
    $header.addClass('scrolled');
  }
}

function onMenuClick(e) {
  if ($(this).attr('href').replace(/\//g, '') === getUrlRelativePath()) {
    e.preventDefault();
  }
}
