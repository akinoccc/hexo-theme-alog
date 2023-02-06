import Scroll from "../utils/scroll.js";

let isSideMenuCollapse = false;
$(function () {
  $(".main-header .icon-view-list").on("click", onSideMenuCollapse);
  $(".side-menu-container").on("click", onSideMenuCollapse);
  $(".side-menu-container .menu .icon-close-circle").on("click", onSideMenuCollapse);
  $(".side-menu-container .menu .category-menu-wrapper .menu-item-name").on("click", onCategoryMenuCollapse);
  $(".side-menu-container ul").on("click", function (e) {
    e.stopPropagation();
  });
  if ($(".menu .category-menu-list-item").hasClass('active')) {
    onCategoryMenuCollapse();
  }
});

function onSideMenuCollapse() {
  if (isSideMenuCollapse) {
    $(".side-menu-container")
      .removeClass("animate__fadeIn")
      .addClass("animate__fadeOut");
    $(".side-menu-container .menu")
      .removeClass("animate__slideInLeft")
      .addClass("animate__slideOutLeft");
    Scroll.allowScroll();
    setTimeout(function () {
      $(".side-menu-container")
        .css("visibility", "hidden");
    }, 500);
  } else {
    Scroll.unscroll();
    $(".side-menu-container")
      .css("visibility", "visible")
      .removeClass("animate__fadeOut")
      .addClass("animate__fadeIn");
    $(".side-menu-container .menu")
      .removeClass("animate__slideOutLeft")
      .addClass("animate__slideInLeft");
  }
  isSideMenuCollapse = !isSideMenuCollapse;
}

function onCategoryMenuCollapse() {
  $(".category-menu-wrapper").toggleClass("category-expand");
}