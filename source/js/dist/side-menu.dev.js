"use strict";

var isSideMenuCollapse = false;
var isCategoryMenuCollapse = false;
$(function () {
  $(".main-header .icon-view-list").on("click", onSideMenuCollapse);
  $(".menu-wrapper").on("click", onSideMenuCollapse);
  $(".menu-wrapper .menu .icon-close-circle").on("click", onSideMenuCollapse);
  $(".menu-wrapper .menu .category-menu-wrapper .menu-item-name").on("click", onCategoryMenuCollapse);
  $(".menu-wrapper ul").on("click", function (e) {
    e.stopPropagation();
  });
});

function onSideMenuCollapse() {
  if (isSideMenuCollapse) {
    $(".menu-wrapper").removeClass("animate__fadeIn").addClass("animate__fadeOut");
    $(".menu-wrapper .menu").removeClass("animate__slideInLeft").addClass("animate__slideOutLeft");
    setTimeout(function () {
      $(".menu-wrapper").css("visibility", "hidden");
    }, 500);
  } else {
    $(".menu-wrapper").css("visibility", "visible").removeClass("animate__fadeOut").addClass("animate__fadeIn");
    $(".menu-wrapper .menu").removeClass("animate__slideOutLeft").addClass("animate__slideInLeft");
  }

  isSideMenuCollapse = !isSideMenuCollapse;
}

function onCategoryMenuCollapse() {
  if (isCategoryMenuCollapse) {
    $(".category-menu-wrapper").removeClass("category-expand");
  } else {
    $(".category-menu-wrapper").addClass("category-expand ");
  }

  isCategoryMenuCollapse = !isCategoryMenuCollapse;
}