"use strict";

var isCollapse = false;
$(".main-header .icon-view-list").on("click", onCollapse);
$(".menu-wrapper").on("click", onCollapse);
$(".menu-wrapper ul").on("click", function (e) {
  e.stopPropagation();
});
$(".menu-wrapper .menu .icon-close-circle").on("trigger", onCollapse);

function onCollapse(e) {
  if (isCollapse) {
    $(".menu-wrapper").removeClass("animate__fadeIn").addClass("animate__fadeOut");
    $(".menu-wrapper .menu").removeClass("animate__slideInLeft").addClass("animate__slideOutLeft");
    setTimeout(function () {
      $(".menu-wrapper").css("visibility", "hidden");
    }, 500);
  } else {
    $(".menu-wrapper").css("visibility", "visible").removeClass("animate__fadeOut").addClass("animate__fadeIn");
    $(".menu-wrapper .menu").removeClass("animate__slideOutLeft").addClass("animate__slideInLeft");
  }

  isCollapse = !isCollapse;
}